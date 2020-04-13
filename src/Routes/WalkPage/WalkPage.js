import React from 'react';
import ApiContext from '../../ApiContext';
import { Link } from 'react-router-dom';
import { format } from 'date-fns'
import './WalkPage.css'
import WalkService from '../../services/walk-api-service';
import WalkFeedbackForm from '../../components/WalkFeedbackForm/WalkFeedbackForm'

class WalkPage extends React.Component {
    static contextType = ApiContext;
    
    state = {
        walk: ''
    }
    // To update walk, should context be updated and a new walks array pushed to database?
    // should each walk update post directly to the database?


    componentDidMount() {
        const { walk_id } = this.props.match.params;
        WalkService.getWalkById(walk_id)
            .then(walk => this.setWalk(walk))
        // Make API call to walk table
        // Pass in current logged in user_id and walk_id
        // On server side, for this walk_id, check if logged in user_id matches user_id in walks table
        // If successful, render the page, if not, push back to landing page
        // Create logic so that if logged in user is admin, render page (check on same route)
    }

    setWalk = (walk) => {
        this.setState({
            walk: walk
        })
    }

    // To cancel a walk, Do I need to change the state of walks in App.js or just post a new status to the API?
    
    
    handleCancelWalk = (e) => {
      
      const { history } = this.props;
      const { walk_id } = this.props.match.params;
      const { loggedInUser } = this.context;
      const newStatus = ({
          walk_status: "cancelled"
      })

      WalkService.updateWalk(walk_id, newStatus)
      this.context.cancelWalk(walk_id);
      history.push(`/user/${loggedInUser.user_id}`)
    
    }

    handleCompleteWalk() {
    const { history } = this.props;
    const { walk_id } = this.props.match.params;
    const { loggedInUser } = this.context;
    
    const newStatus = ({
        walk_status: "complete"
    })

    WalkService.updateWalk(walk_id, newStatus)

    this.context.completeWalk(walk_id)
    history.push(`/user/${loggedInUser.user_id}`)
      

    }

    handleAcceptWalk() {
        const { history } = this.props;
        const { walk_id } = this.props.match.params;
        const { loggedInUser } = this.context;
        
        const newStatus = ({
            walk_status: "cancelled"
        })
  
        WalkService.updateWalk(walk_id, newStatus)

        this.context.acceptWalk(walk_id)
        history.push(`/user/${loggedInUser.user_id}`)
          
    
        }

    handleDeclineWalk() {
        const { history } = this.props;
        const { walk_id } = this.props.match.params;
        const { loggedInUser } = this.context;

        const newStatus = ({
            walk_status: "declined"
        })
  
        WalkService.updateWalk(walk_id, newStatus)
              
        this.context.declineWalk(walk_id)
        history.push(`/user/${loggedInUser.user_id}`)
              
        
        }


    renderUserRequestControls = (walkId) => {
        return (
            <>
            <button
                type="button"
                onClick={e => this.handleCancelWalk(walkId)}>
                Cancel Walk Request
            </button>
            </>
        )
    }

    renderWalkerRequestControls = (walkId) => {
        return (
            <>
            <button
                type="button"
                onClick={e => this.handleAcceptWalk(walkId)}>
                Accept Walk
            </button>
            <button
                type="button"
                onClick={e => this.handleDeclineWalk(walkId)}>
                Decline Walk
            </button>
            </>
        )
    }



    renderActiveWalkControls = (walkId, walk_status) => {
        if (walk_status !== "complete") {
            return (
                <>
        
                    <button
                        type="button"
                        onClick={e => this.handleCancelWalk(walkId)}>
                            Cancel Walk
                        </button>
                        <button
                            type="button"
                            onClick={e => this.handleCompleteWalk(walkId)}
                        >
                             Complete Walk
                        </button>
                </>
                ) 


        } else {
            return (
                <>
                </>
            )
        }
        
        
        
    }

    renderRequestControls = (walkId) => {
        const { loggedInUser } = this.context;

        return (

        loggedInUser.user_type === "user" 
        ? this.renderUserRequestControls(walkId)
        : this.renderWalkerRequestControls(walkId)
        )
    }

    renderFeedbackForm = (walk_id) => {
        return (
            <WalkFeedbackForm 
                walk_id={walk_id}
                handleFeedback={this.handleFeedback}/>
        )
    }

    handleFeedback = (walk_id, rating, comment) => {
        this.context.handleFeedback(walk_id, rating, comment)

    }

    handleBackToAccount = (e) => {
        const { history } = this.props;
        const { loggedInUser } = this.context;
        history.push(`/user/${loggedInUser.user_id}`)
    }

    render() {
        const { walk_id } = this.props.match.params;
        const { loggedInUser } = this.context;
        const { walk } = this.state;
        console.log(walk)
        const { walks } = this.context;
        const selectWalk = walks.find(walk => walk.walk_id == walk_id)
        console.log(walk_id)
        console.log(this.context);

        return (
            <div className="walk-page">
                <div className="back-button">
                    <button
                        onClick={e => this.handleBackToAccount(e)}>
                        Back to my account
                    </button>
                </div>
                <div className="walk-page-title">
                    Walk for {`${walk.dog_name}`}
                </div>
                <div className="walk-page-data">
                    <p>Walk with: {walk.walker_firstname}</p>
                    
                    <p>Walk Date: {walk.walk_date}</p>
                    <p>Walk Time: {walk.request_time}</p>
                </div>
                <div className="walk-page-address">
                    Pickup Address:
                    {' '}
                    {walk.pickup_address_street_number}
                    {' '}
                     {walk.pickup_address_street_name},
                     {' '}
                     {walk.pickup_address_city}
                     {' '}
                     {walk.pickup_address_province},
                     {' '}
                     {walk.pickup_address_postal_code}
                </div>
                <div className="walk-status">
                    Status: {walk.walk_status}
                </div>
                <div className="walk-controls">
                    {walk.walk_status === "requested"
                        ? this.renderRequestControls(selectWalk.walk_id)
                        : this.renderActiveWalkControls(selectWalk.walk_id, selectWalk.status)}

                    
                    
                </div>
                
                
                <div className="walk-feedback">
                    {(walk.walk_status === "complete" && loggedInUser == "user") ?
                        <WalkFeedbackForm 
                            walk_id={walk.walk_id}
                            handleFeedback={this.handleFeedback}/> :
                        null }
                    
                </div>
                
            </div>

            
        )
    }
}

export default WalkPage;
import React from 'react';
import ApiContext from '../../ApiContext';
import { Link } from 'react-router-dom';

class WalkPage extends React.Component {
    static contextType = ApiContext;
    
    


    componentDidMount() {

        // Make API call to walk table
        // Pass in current logged in user_id and walk_id
        // On server side, for this walk_id, check if logged in user_id matches user_id in walks table
        // If successful, render the page, if not, push back to landing page
        // Create logic so that if logged in user is admin, render page (check on same route)
    }

    // To cancel a walk, Do I need to change the state of walks in App.js or just post a new status to the API?
    
    
    handleCancelWalk = (e) => {
      
      const { history } = this.props;
      const { walk_id } = this.props.match.params;
      const { loggedInUser } = this.context;
      

      
      this.context.cancelWalk(walk_id);
      history.push(`/user/${loggedInUser.user_id}`)
    
    }

    handleCompleteWalk() {
    const { history } = this.props;
    const { walk_id } = this.props.match.params;
    const { loggedInUser } = this.context;
      
    this.context.completeWalk(walk_id)
    history.push(`/user/${loggedInUser.user_id}`)
      

    }

    handleAcceptWalk() {
        const { history } = this.props;
        const { walk_id } = this.props.match.params;
        const { loggedInUser } = this.context;
          
        this.context.acceptWalk(walk_id)
        history.push(`/user/${loggedInUser.user_id}`)
          
    
        }

    handleDeclineWalk() {
        const { history } = this.props;
        const { walk_id } = this.props.match.params;
        const { loggedInUser } = this.context;
              
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



    renderActiveWalkControls = (walkId, status) => {
        if (status !== "complete") {
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

        loggedInUser.type === "user" 
        ? this.renderUserRequestControls(walkId)
        : this.renderWalkerRequestControls(walkId)
        )
    }

    render() {
        const { walk_id } = this.props.match.params;
        const { walks } = this.context;
        const selectWalk = walks.find(walk => walk.walk_id == walk_id)
        console.log(walk_id)
        console.log(this.context);

        return (
            <div>
                <div className="walk-page-title">
                    Walk for {`${selectWalk.dog_name}`}
                </div>
                <div className="walk-page-data">
                    <p>Walk with: {selectWalk.walker_firstname}</p>
                    <p>Walk Date: {selectWalk.walk_date}</p>
                </div>
                <div className="walk-page-address">
                    Pickup Address:
                    {' '}
                    {selectWalk.pickup_address_street_number}
                    {' '}
                     {selectWalk.pickup_address_street_name},
                     {' '}
                     {selectWalk.pickup_address_city}
                     {' '}
                     {selectWalk.pickup_address_province},
                     {' '}
                     {selectWalk.pickup_address_postal_code}
                </div>
                <div className="walk-status">
                    Status: {selectWalk.status}
                </div>
                <div className="walk-controls">
                    {selectWalk.status === "requested"
                        ? this.renderRequestControls(selectWalk.walk_id)
                        : this.renderActiveWalkControls(selectWalk.walk_id, selectWalk.status)}

                    
                    
                </div>
            </div>

            
        )
    }
}

export default WalkPage;
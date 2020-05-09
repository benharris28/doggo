import React from 'react';
import ApiContext from '../../ApiContext';
import './WalkPage.css'
import WalkService from '../../services/walk-api-service';
import WalkFeedbackForm from '../../components/WalkFeedbackForm/WalkFeedbackForm'
import moment from 'moment'

class WalkPage extends React.Component {
    
    
    static contextType = ApiContext;
    
    state = {
        walk: ''
    }
    


    componentDidMount() {
        const { walk_id } = this.props.match.params;
        WalkService.getWalkById(walk_id)
            .then(walk => this.setWalk(walk))
        
    }

    setWalk = (walk) => {
        this.setState({
            walk: walk
        })
    }

    
    
    
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

   
    handleBackToAccount = (e) => {
        const { history } = this.props;
        const { loggedInUser } = this.context;
        history.push(`/user/${loggedInUser.user_id}`)
    }



    renderUserButtons = () => {
        const { walk } = this.state;
        const walkStatus = walk.walk_status;

        if (walkStatus == "complete") {
            return (
                <div>
                   
                </div>
            )
        } else if (walkStatus == "requested") {
            return (
                
                <>
                    <button
                        type="button"
                        className="cancel-button"
                        onClick={e => this.handleCancelWalk(walk.walk_id)}>
                            Cancel Walk Request
                    </button>
                </>
               
            )
        } else if (walkStatus == "accepted") {
            return (
                <>
                    <button
                        type="button"
                        className="cancel-button"
                        onClick={e => this.handleCancelWalk(walk.walk_id)}>
                            Cancel Walk
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

    renderWalkerButtons = () => {
        const { walk } = this.state;
        const walkStatus = walk.walk_status;

        if (walkStatus == "complete" || walkStatus == "declined") {
            return (
                <div>
                   
                </div>
            )
        } else if (walkStatus == "requested") {
            return (
                
                <>
                    <button
                        type="button"
                        className="accept-button"
                        onClick={e => this.handleAcceptWalk(walk.walk_id)}>
                        Accept Walk
                    </button>
                    <button
                        type="button"
                        className="decline-button"
                        onClick={e => this.handleDeclineWalk(walk.walk_id)}>
                        Decline Walk
                    </button>
                </>
               
            )
        } else {
            return (
                <>
        
                    <button
                        type="button"
                        className="cancel-button"
                        onClick={e => this.handleCancelWalk(walk.walk_id)}>
                            Cancel Walk
                        </button>
                        <button
                            type="button"
                            className="complete-button"
                            onClick={e => this.handleCompleteWalk(walk.walk_id)}
                        >
                             Complete Walk
                    </button>
                </>
            )
        }
    }
    render() {
        
        const { userType } = this.context;
        const { walk } = this.state;
        
       
        const formatDate = moment(new Date(walk.walk_date)).format('MM DD YYYY')
        const formatTime = moment(new Date(walk.walk_date)).format('h:mm:ss a')

        return (
            <div className="walk-page">
                <div className="back-button-box">
                    <button
                        className="back-button"
                        onClick={e => this.handleBackToAccount(e)}>
                        Back to my account
                    </button>
                </div>
                <div className="walkpage-card">
                <div className="walkpage-title">
                    Walk for {`${walk.dog_name}`}
                </div>
                <div className="walk-page-data">
                    <p>Walk with: {walk.walker_firstname}</p>
                    
                    <p>Walk Date: {formatDate}</p>
                    <p>Walk Time: {formatTime}</p>
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
                
                <div className="walk-control-buttons">
                    {userType === "user" 
                    ? this.renderUserButtons()
                    : this.renderWalkerButtons()}
                </div>

                <div className="walk-feedback">
                    {(walk.walk_status === "complete" && userType == "user") ?
                        <WalkFeedbackForm 
                            walk_id={walk.walk_id}
                            handleBackToAccount={this.handleBackToAccount}
                           /> : null }
                    
                </div>
                </div>
                
            </div>

            
        )
    }
}

export default WalkPage;
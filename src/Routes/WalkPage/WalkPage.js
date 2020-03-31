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
      
      this.context.cancelWalk(walk_id);
      history.push('/walk/1')
    
    }

    handleCompleteWalk() {
    const { history } = this.props;
    const { walk_id } = this.props.match.params;
      
    this.context.completeWalk(walk_id)
    history.push('/walk/1')
      

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
                    <button
                        type="button"
                        onClick={e => this.handleCancelWalk(selectWalk.walk_id)}>
                        Cancel Walk
                    </button>
                    <button
                        type="button"
                        onClick={e => this.handleCompleteWalk(selectWalk.walk_id)}
                        >
                        Complete Walk
                    </button>
                </div>
            </div>

            
        )
    }
}

export default WalkPage;
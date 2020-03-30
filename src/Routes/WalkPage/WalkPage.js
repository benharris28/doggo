import React from 'react';
import ApiContext from '../../ApiContext';
import { Link } from 'react-router-dom';

class WalkPage extends React.Component {
    static contextType = ApiContext;

    state = {
        
    }

    // To cancel a walk, Do I need to change the state of walks in App.js or just post a new status to the API?
    handleCancelWalk = (e) => {
      e.preventDefault();
      const { walk_id } = this.props.match.params;
      this.context.cancelWalk(walk_id)
    
      
    }

    handleCompleteWalk() {

    }

    render() {
        const { walk_id } = this.props.match.params;
        const { walks } = this.context;
        const selectWalk = walks.find(walk => walk.walk_id == walk_id)


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
                <div className="walk-controls">
                    <button
                        onSubmit={e => this.handleCancelWalk(selectWalk.walk_id)}>
                        Cancel Walk
                    </button>
                    <button>
                        Complete Walk
                    </button>
                </div>
            </div>

            
        )
    }
}

export default WalkPage;
import React from 'react';
import { Link } from 'react-router-dom';
import './WalkItem.css'

class WalkItem extends React.Component {
    renderButtons = () => {
        return (
            <>

            </>
        )
        
    }
    
    render() {
        const { walk, walker, date, walk_status } = this.props;
        const { loggedInUser, userType } = this.context;

        return (
            <div className="walk-card">
                <Link
                    to={`/walk/${walk}`}>
            <div>
               <p>Walker: {walker}</p>
                <p>Date: {date}</p>
                <p>Status: {walk_status}</p>

            </div>
            <div className="walk-controls">

            </div>
            </Link>
            </div>
        )
    }
}

export default WalkItem;
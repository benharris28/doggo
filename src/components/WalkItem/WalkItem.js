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
        const { walk, user, date, walk_status } = this.props;
        const { loggedInUser, userType } = this.context;
        const userTitle = userType == "walker" ? "User" : "Walker"
        return (
            <div className="walk-card">
                <Link
                    to={`/walk/${walk}`}>
            <div>
               <p>{userTitle}: {user}</p>
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
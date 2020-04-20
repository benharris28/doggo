import React from 'react';
import { Link } from 'react-router-dom';
import { NiceDate } from '../../components/Utils/Utils'
import moment from 'moment';
import './WalkItem.css'

class WalkItem extends React.Component {
    renderButtons = () => {
        return (
            <>

            </>
        )
        
    }

    newDate = (dateToFormat) => {
        return moment(dateToFormat).format('MMM Do YYYY')
    }
    
    
    render() {
        
        const { walk, user, walker, date, walk_status } = this.props;
        console.log(date)
        const { loggedInUser, userType } = this.context;
        const formatDate = moment(new Date(date)).format('MM DD YYYY')
        const formatTime = moment(new Date(date)).format('h:mm:ss a')
        console.log(formatTime)
  
      
        console.log(formatDate)
       
       
        const title = userType === "walker" ? <p>User: {user}</p> : <p>Walker: {walker} </p>
        return (
            <div className="walk-card">
                <Link
                    to={`/walk/${walk}`}>
            <div>
                {title}
                <p>Date: {formatDate}</p>
                <p>Time: {formatTime}</p>
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
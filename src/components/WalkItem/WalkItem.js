import React from 'react';
import { Link } from 'react-router-dom';
import { NiceDate } from '../../components/Utils/Utils'
import { moment } from 'moment';
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
        //const update = this.newDate(date)
        const testDate = new Date(date)
        const dateUpdate = testDate.moment().format('MMM Do YY')
        console.log(testDate)
       
        const title = userType === "walker" ? <p>User: {user}</p> : <p>Walker: {walker} </p>
        return (
            <div className="walk-card">
                <Link
                    to={`/walk/${walk}`}>
            <div>
                {title}
                {dateUpdate}
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
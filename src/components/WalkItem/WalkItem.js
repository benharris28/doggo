import React from 'react';
import moment from 'moment';
import './WalkItem.css'
import dog_on_leash from '../../Photos/dog_on_leash.png'

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
        
        const { user, walker, date } = this.props;
       
        const { userType } = this.context;
        const formatDate = moment(new Date(date)).format('MM DD YYYY')
        const formatTime = moment(new Date(date)).format('h:mm:ss a')
        
        const logo = dog_on_leash
  
      
       
       
       
        const title = userType === "walker" ? <p><b>User:</b> {user}</p> : <p><b>Walker:</b> {walker} </p>
        return (
            <div className="walk-card">
                <div className="walk-image">
                    <div className="walk-image-wrapper">
                        <img src={logo} alt="dog-walker-icon" />
                    </div>
                </div>
                
            <div className="walk-info">
                {title}
                <p><b>Date:</b> {formatDate}</p>
                <p><b>Time:</b> {formatTime}</p>

            </div>
            </div>
        )
    }
}

export default WalkItem;
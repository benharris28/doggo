import React from 'react';
import moment from 'moment';
import './FeedbackItem.css';
import faker from 'faker';


class FeedbackItem extends React.Component {
    
    render() {
        const { user, photo, comment, rating, date  } = this.props;
     
        const formatDate = moment(new Date(date)).format('MM DD YYYY')

        
        return (

            <div className="feedback-card">
                <div className="feedback-image-box">
                
                
                    <img src={faker.image.avatar()} alt="avatar"/>

                </div >

                <div className="feedback-info">
                    <p>{user}</p>
                    <p>Date: {formatDate}</p>
                    <p>Rating: {rating}</p>
                    <p>Comment: {comment}</p>


                   
                    
                   
                    
                   
                </div>
                
            </div>
            
        )
    }
}

export default FeedbackItem;
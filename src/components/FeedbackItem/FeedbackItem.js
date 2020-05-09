import React from 'react';
import moment from 'moment';
import './FeedbackItem.css';
import faker from 'faker';


class FeedbackItem extends React.Component {
    
    render() {
        const { user, comment, rating, date  } = this.props;
     
        const formatDate = moment(new Date(date)).format('MM DD YYYY')

        
        return (

            <div className="feedback-card">
                <div className="card-image">
                
                    <div className="image-wrapper">
                        <img src={faker.image.avatar()} alt="avatar"/>
                    </div>
                    

                </div >

                <div className="card-info">
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
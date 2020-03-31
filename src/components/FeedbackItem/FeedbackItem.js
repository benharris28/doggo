import React from 'react';
import { Link } from 'react-router-dom';
import './FeedbackItem.css'


class FeedbackItem extends React.Component {
    
    render() {
        const { user, photo, comment, rating, date  } = this.props;
        console.log(user)
        
        return (

            <div className="feedback-card">
                <div className="feedback-image-box">
                
                    <div>Stock Photo</div>
                </div >

                <div className="feedback-info">
                    <p>{user}</p>
                    <p>Date: {date}</p>
                    <p>Rating: {rating}</p>
                    <p>Comment: {comment}</p>


                   
                    
                   
                    
                   
                </div>
                
            </div>
            
        )
    }
}

export default FeedbackItem;
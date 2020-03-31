import React from 'react';
import ApiContext from '../../ApiContext';
import FeedbackItem from '../FeedbackItem/FeedbackItem';
import './FeedbackList.css';


class FeedbackList extends React.Component {
    static contextType = ApiContext;

    render() {
        const { id, name } = this.props;
        console.log(id)
        const { walks=[] } = this.context;
        console.log(walks)
        
      
        const getFeedbackForWalker = (walks, id) => (
            (!id)
            ? walks
            : walks.filter(walk => walk['walker_id'] === id)
            )
        
        const feedbackItems = getFeedbackForWalker(walks, id)
        
        

        console.log(feedbackItems)
        console.log(getFeedbackForWalker)
        return (
            <section className="walker-feedback-list">
                <h3>Feedback for {name}</h3>
                <ul className="feedback-ul">
                    {feedbackItems.map(feedback => 
                            <li className="walk-li" key={feedback.walker_id}>
                                <FeedbackItem
                                    user={feedback.user_firstname}
                                    photo={feedback.user_photo}
                                    rating={feedback.rating}
                                    comment={feedback.comment}
                                    date={feedback.walk_date}
                                />
                            </li>)}
                </ul>
            </section>
            
        )
    }
}

export default FeedbackList;
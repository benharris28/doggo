import React from 'react';
import ApiContext from '../../ApiContext';
import FeedbackItem from '../FeedbackItem/FeedbackItem';
import WalkApiService from '../../services/walk-api-service';
import './FeedbackList.css';

class FeedbackList extends React.Component {
    static contextType = ApiContext;

    state = {
        walks: [],
    }
    
    componentDidMount() {
        const { id } = this.props

        WalkApiService.getAllWalksForWalkerId(id)
            .then(walks => {
                
                this.setWalks(walks)
                
            })
        
       

    }

    setWalks = (walks) => {
        this.setState({
            walks: walks
        })
    }
    
    render() {
        const { name } = this.props;
        
        const { walks=[] } = this.state;
       

        const feedbackItems = walks.filter(walk => walk.comment !== null && walk.walk_status === "complete")


        
     
        return (
            <section className="walker-feedback-list">
                <h3>Feedback for {name}</h3>
                <ul className="feedback-ul">
                    {feedbackItems.map(feedback => 
                            <li className="walk-li" key={feedback.walk_id}>
                                <FeedbackItem
                                    user={feedback.user_firstname}
                                    photo={feedback.user_photo}
                                    rating={feedback.rating}
                                    comment={feedback.comment}
                                    date={feedback.walk_date}
                                />
                            </li>)}
                </ul>
                <div className="no-feedback">
                    {(feedbackItems.length == 0) &&
                     <p>No feedback yet</p>
                     } 
                </div>

            </section>
            
        )
    }
}

export default FeedbackList;
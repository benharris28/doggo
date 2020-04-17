import React from 'react';
import ApiContext from '../../ApiContext';
import FeedbackItem from '../FeedbackItem/FeedbackItem';
import WalkApiService from '../../services/walk-api-service';
import './FeedbackList.css';

// Needs its own API call for walks because walks in context is walks for the loggedinuser
class FeedbackList extends React.Component {
    static contextType = ApiContext;

    state = {
        walks: [],
    }
    
    componentDidMount() {
        const { id } = this.props

        WalkApiService.getAllWalksForWalkerId(id)
            .then(walks => {
                console.log(walks)
                this.setWalks(walks)
                
            })
        
       

    }
    
    setWalks = (walks) => {
        this.setState({
            walks: walks
        })
    }
    
    render() {
        const { id, name } = this.props;
        console.log(id)
        const { walks=[] } = this.state;
        console.log(walks)
        
      
        const feedbackItems = walks.filter(walk => walk.walk_status === "complete")
        

        console.log(feedbackItems)
     
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
            </section>
            
        )
    }
}

export default FeedbackList;
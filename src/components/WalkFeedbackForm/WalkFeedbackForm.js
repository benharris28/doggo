import React from 'react';
import ApiContext from '../../ApiContext';
import WalkApiService from '../../services/walk-api-service';

class WalkFeedbackForm extends React.Component {
    
    static contextType = ApiContext;

    state = {
        comment: '',
        rating: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { walk_id } = this.props;
        const { comment, rating } = this.state;

        const feedback = {
            comment: comment,
            rating: rating
        }

        WalkApiService.updateWalk(walk_id, feedback)
            .then(res => {

                    // Need set timeout here
                this.props.handleBackToSearch()
               
                
            })
        //this.props.handleFeedback(rating, comment)

    }

    handleComment = (comment) => {
        this.setState({
            comment: comment
        })
    }

    handleRating = (rating) => {
        this.setState({
            rating: rating
        })
    }





    render() {
        return (
            <div>
                <div className="feedback-title">
                    Leave feedback for your walker
                </div>
                <form 
                    className="walk-feedback-form"
                    onSubmit={e => this.handleSubmit(e)}>

                    <div className="rating-input">
                            <label htmlFor="rating">
                                Rating
                            </label>
                            <input 
                                type="number" 
                                name="rating" 
                                onChange={e => this.handleRating(e.target.value)}
                                />
                        </div>
                        <div className="comment-input">
                            <label htmlFor="comment">
                                Comment
                            </label>
                            <input 
                                type="text" 
                                name="comment" 
                                onChange={e => this.handleComment(e.target.value)}
                                />
                        </div>
                        <div className="feedback-submit">
                            <button
                                type="submit">
                                    Submit Feedback
                            </button>
                        </div>
                </form>
            </div>
        )
    }
}

    export default WalkFeedbackForm;
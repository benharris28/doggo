import React from 'react';
import ApiContext from '../../ApiContext';
import FeedbackList from '../../components/FeedbackList/FeedbackList';
import BookWalkForm from '../../components/BookWalkForm/BookWalkForm';
import './WalkerPage.css'

//To do
// Add route to App.js
// Need a find method to isolate individual walker from array
// Should form input be its own component?
// Update address input to be elastic search of addresses
// How can I reuse components (like lists) if they look similar but have different outputs (eg feedback vs. name)

//Submition of book walk form should create a new walk with status "requested"
class WalkerPage extends React.Component {
    static contextType = ApiContext;
    
    handleBackToSearch = (e) => {
        const { history } = this.props;
        history.push('/walker')
    }

    

    render() {
    const { walkers, users, walks } = this.context
    console.log(walkers)
    const { user_id } = this.props.match.params
    console.log(user_id)
    
    const id = 4

    const selectWalker =  walkers.find(walker => walker.user_id == user_id)

    console.log(selectWalker)
  
        return (
            <section className="walker-page">
                <div className="return-to-list-button">
                    <button
                        type="button"
                        onClick={e => this.handleBackToSearch(e)}>
                        Return to search
                    </button>
                </div>
                <div className="walker-image">
                    <img src={selectWalker.profile_photo} />
                </div>
                <div className="walker-blurb">
                    <h3>{selectWalker.name}</h3>
                    <p>{selectWalker.bio}</p>
                </div>
                <section className="book-walk-form">
                    <BookWalkForm 
                        name={selectWalker.first_name}
                        id={selectWalker.user_id}
                        handleBackToSearch={this.handleBackToSearch}
                        />
                </section>
                <div className="feedback-list">
                    <FeedbackList
                        id={selectWalker.user_id}
                        name={selectWalker.first_name}
                        />
                </div>
            </section>
            

        )
    }
}

export default WalkerPage;
import React from 'react';
import ApiContext from '../../ApiContext';
import FeedbackList from '../../components/FeedbackList/FeedbackList';
import BookWalkForm from '../../components/BookWalkForm/BookWalkForm';

//To do
// Add route to App.js
// Need a find method to isolate individual walker from array
// Should form input be its own component?
// Update address input to be elastic search of addresses
// How can I reuse components (like lists) if they look similar but have different outputs (eg feedback vs. name)

//Submition of book walk form should create a new walk with status "requested"
class WalkerPage extends React.Component {
    static contextType = ApiContext;
    
    render() {
    const { walkers, users } = this.context
    const { user_id } = this.props.match.params
    console.log(user_id)
    
    const id = 4

    const selectUser =  walkers.find(walker => walker.user_id == user_id && walker.type == 'walker')

    console.log(selectUser)
  
        return (
            <section className="walker-bio">
                <div className="walker-image">
                    <img src={selectUser.profile_photo} />
                </div>
                <div className="walker-blurb">
                    <h3>{selectUser.name}</h3>
                    <p>{selectUser.bio}</p>
                </div>
                <section className="book-walk-form">
                    <BookWalkForm 
                        name={selectUser.name}
                        id={selectUser.user_id}
                        />
                </section>
                <div className="feedback-list">
                    <FeedbackList
                        id={selectUser.user_id}
                        name={selectUser.name}
                        />
                </div>
            </section>
            

        )
    }
}

export default WalkerPage;
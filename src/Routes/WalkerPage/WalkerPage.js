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
    const { walkers } = this.context
    const { walker_id } = this.props.match.params
    console.log(walker_id)

    const selectedWalker = walkers.find(walker => walker.id == walker_id)
  
        return (
            <section className="walker-bio">
                <div className="walker-image">
                    <img src={selectedWalker.profile_photo} />
                </div>
                <div className="walker-blurb">
                    <h3>{selectedWalker.name}</h3>
                    <p>{selectedWalker.bio}</p>
                </div>
                <section className="book-walk-form">
                    <BookWalkForm 
                        name={selectedWalker.name}
                        id={selectedWalker.id}
                        />
                </section>
                <div className="feedback-list">
                    <FeedbackList
                        id={selectedWalker.id}
                        name={selectedWalker.name}
                        />
                </div>
            </section>
            

        )
    }
}

export default WalkerPage;
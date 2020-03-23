import React from 'react';
import ApiContext from '../../ApiContext';

//To do
// Add route to App.js
// Need a find method to isolate individual walker from array
// Should form input be its own component?
// Update address input to be elastic search of addresses

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
                    {selectedWalker.profile_photo}
                </div>
                <div className="walker-blurb">
                    <h3>{selectedWalker.name}</h3>
                    <p>{selectedWalker.bio}</p>
                </div>
                <section className="book-walk-form">
                    <form>
                        <h3>{`Book a walk with ${selectedWalker.name}`}</h3>
                        <div className="book-walk-date">
                            <label htmlFor="book-walk-date">
                                When would you like to book a walk?
                            </label>
                            <input 
                                type="date"
                                name="book-walk-date"
                                required
                            />

                        </div>
                        
                        <div className="walk-time-input">
                            <label htmlFor="walk-time">
                                What time should your dog be picked up?
                            </label>
                            <input 
                                type="time" 
                                name="walk-time" 
                                required /> 
                        </div>

                        <div className="walk-address-input">
                            <label htmlFor="walk-date">
                                Where should your dog be picked up?
                            </label>
                            <input 
                                type="text" 
                                name="walk-address" 
                                required />
                        </div>
                        <div className="button-box">
                            <button type="submit">
                                Request Walk
                            </button>
                        </div>
                       

                    </form>
                </section>
            </section>

        )
    }
}

export default WalkerPage;
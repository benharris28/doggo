import React from 'react';
import ApiContext from '../../ApiContext';

//To do
// Add route to App.js
// Need a find method to isolate individual walker from array
// Should form input be its own component?

class WalkerPage extends React.Component {
    static contextType = ApiContext;
    
    render() {
    const { walkers } = this.context
        return (
            <section className="walker-bio">
                <div className="walker-image">
                    {walkers.profile_photo}
                </div>
                <div className="walker-blurb">
                    <h3>{walkers.name}</h3>
                    <p>{walkers.bio}</p>
                </div>
            </section>

        )
    }
}

export default WalkerPage;
import React from 'react';
import { Link } from 'react-router-dom';
import WalkerItem from '../../components/WalkerItem/WalkerItem';
import ApiContext from '../../ApiContext'
import './WalkerListingPage.css'

//To do
// Make each walker item a link to the walker page
// Fix img links
// Add submit button to walk form
// Should inputed form trigger API call for available walkers?

class WalkerListingPage extends React.Component {
    
    static contextType = ApiContext;

    render() {
        const { walkers }= this.context;
        console.log(walkers)
        
       

        return (
            <section className="walker_listing_page">
                
                <div className="listing_controls">
                    When would you like book a walk?
                    <form id="walk-date-form">
                        <h3>
                            Find a walker
                        </h3>
                        
                        <p>Enter your walk date and browse available walkers in your area</p>
              
                        <div>
                            <label htmlFor="walk-date">When would you like to book a walk?</label>
                            <input type="date" name="walk-date" required />
                        </div>

                    </form>
                
                </div>
                <div className="walker-list">
                    <ul className="walk-ul">
                        {walkers.map(walker => 
                            <li className="walk-li" key={walker.id}>
                                <WalkerItem
                                    id={walker.user_id}
                                    name={walker.first_name}
                                    photo={walker.profile_photo}
                                    postal={walker.postal_short}
                                    rating={walker.rating}
                                />
                            </li>)}
                    </ul>
                </div>
                
              
            </section> 


            
              

            
                
            
                
        )
    }
}

export default WalkerListingPage;
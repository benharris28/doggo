import React from 'react';
import { Link } from 'react-router-dom';

class WalkerListingPage extends React.Component {
    render() {
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
                            <label for="walk-date">When would you like to book a walk?</label>
                            <input type="date" name="walk-date" required />
                        </div>

                    </form>
                
                </div>
                
              
            </section> 


            
              

            
                
            
                
        )
    }
}

export default WalkerListingPage;
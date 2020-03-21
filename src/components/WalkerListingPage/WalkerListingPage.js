import React from 'react';
import { Link } from 'react-router-dom';
import WalkerItem from '../WalkerItem/WalkerItem';
import ApiContext from '../../ApiContext'

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
                            <label for="walk-date">When would you like to book a walk?</label>
                            <input type="date" name="walk-date" required />
                        </div>

                    </form>
                
                </div>
                <div className="walker-list">
                    <ul className="walk-ul">
                        {walkers.map(walker => 
                            <li key={walker.id}>
                                <WalkerItem
                                    id={walker.id}
                                    name={walker.name}
                                />
                            </li>)}
                    </ul>
                </div>
                
              
            </section> 


            
              

            
                
            
                
        )
    }
}

export default WalkerListingPage;
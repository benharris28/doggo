import React from 'react';
import { Link } from 'react-router-dom';
import WalkerItem from '../../components/WalkerItem/WalkerItem';
import ApiContext from '../../ApiContext'
import WalkerListApiService from '../../services/walkerList-api-service'
import './WalkerListingPage.css'
import faker from 'faker'



class WalkerListingPage extends React.Component {
    
    static contextType = ApiContext;

    // API
    // Pull all walkers from the database (for now) and add them to context - will need to isolate later
    componentDidMount() {
        WalkerListApiService.getAllWalkers()
            .then(res => {
                console.log(res)
                this.context.handleWalkerList(res)
            })
    }

    render() {
        const { walkers }= this.context;
        console.log(walkers)
        
       

        return (
            <section className="walker_listing_page">
                <h2>Find a walker</h2>

                Choose a walker below to book a walk
                
                <div className="walker-list">
                    <ul className="walk-ul">
                        {walkers.map(walker => 
                            <li className="walk-li" key={walker.user_id}>
                                <WalkerItem
                                    id={walker.user_id}
                                    name={walker.first_name}
                                    //photo={walker.profile_photo}
                                    
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
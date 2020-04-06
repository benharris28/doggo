import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import ApiContext from '../../ApiContext';


class LandingPage extends React.Component {
    static contextType = ApiContext;
    
    render() {
       const { loggedIn } = this.context;
       console.log(loggedIn)
       const loggedInDestination = '/walker';
       const loggedOutDestination = '/login';
       const destination = loggedIn ? loggedInDestination : loggedOutDestination
       console.log(destination)
        
        return (
            <section className="LandingPage">
                <div className="title_section">
                    <h2>Welcome to Doggo</h2>
                </div>
                
                <div className="landing_page_hero">
                    <h2>
                        Book a walk with dog walkers near you
                    </h2>
                 
                    <Link to={destination}>
                        <button 
                            type="button">
                                Book Now
                            </button>
                    </Link>
                </div>
                <div className="landing_page_hero two">
                    <h2>
                        Copy #2
                    </h2>
                    <Link to={destination}>
                        <button 
                            type="button">
                                Book Now
                            </button>
                    </Link>
                   
                </div>
                <div className="landing_page_hero 3">
                    <h2>
                        Copy #3
                    </h2>
                    <Link to={destination}>
                        <button 
                            type="button">
                                Book Now
                            </button>
                    </Link>
                </div>
            </section>
        )
    }
}

export default LandingPage;

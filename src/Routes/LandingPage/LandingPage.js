import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import ApiContext from '../../ApiContext';
import IMG_1252 from '../../Photos/IMG_1252.JPG'


class LandingPage extends React.Component {
    static contextType = ApiContext;
    
    render() {
       const { loggedIn } = this.context;
    
       const loggedInDestination = '/walker';
       const loggedOutDestination = '/login';
       const destination = loggedIn ? loggedInDestination : loggedOutDestination
       
        const russ = IMG_1252
        return (
            <section className="LandingPage">
                <div className="title_section">
                    <h2>Book a walk with trusted dog walkers near you</h2>
                    <Link className="textlink" to={destination} style={{ textDecoration: 'none' }}>
                        <button 
                            type="button"
                            className="hero-button">
                                Book Now
                            </button>
                    </Link>
                </div>
                
               
                <div className="landing_page_section_two">
                    <h2>
                        Reasons to Doggo
                    </h2>
                    <div className="reason-container">
                        <div className="reason-list">

                        
                        <div className="reason">
                            <div className="photo-container">
                                <img className="hero-photo" src={russ} />
                            </div>
                            <div className="text-container">
                                <h3>Here when you need us</h3>
                                <p>Whether you're looking for daily walks or just a one time thing, we have a walker for your best friend</p>
                            </div>
                         
                        </div>
                    </div>
                    <div className="reason">
                            <div className="photo-container">
                                <img className="hero-photo" src={russ} />
                            </div>
                            <div className="text-container">
                                <h3>Here when you need us</h3>
                                <p>Whether you're looking for daily walks or just a one time thing, we have a walker for your best friend</p>
                            </div>
                         
                        </div>
                   
                        </div>
                </div>
             
                    
                  
                        
                
                   
                   
               
                
            </section>
        )
    }
}

export default LandingPage;

import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import ApiContext from '../../ApiContext';
import IMG_1252 from '../../Photos/IMG_1252.JPG'
import checkmark from '../../Photos/checkmark.png'
import clock from '../../Photos/clock.png'


class LandingPage extends React.Component {
    static contextType = ApiContext;
    
    render() {
       const { loggedIn } = this.context;
    
       const loggedInDestination = '/walker';
       const loggedOutDestination = '/login';
       const destination = loggedIn ? loggedInDestination : loggedOutDestination
       
        const russ = IMG_1252
        const checkmarkImage = checkmark
        

        return (
            <section className="LandingPage">
                <div className="title_section">
                    <div className="title-intro-box">
                        <h2>Book a walk with trusted dog walkers near you</h2>
                        <Link className="textlink" to={destination} style={{ textDecoration: 'none' }}>
                            <button 
                                type="button"
                                className="hero-button">
                                    Book Now
                                </button>
                        </Link>
                    </div>
                    
                </div>
                
               
                <div className="landing_page_section_two">
                    <h2 className="section-title">
                        Reasons to Doggo
                    </h2>

                    <div className="reason-container">
                    
                       

                        
                        <div className="reason">
                            <div className="photo-container">
                                <img className="hero-photo" src={russ} alt="dog" />
                            </div>
                            <div className="text-container">
                                <h3>Here when you need us</h3>
                                <p>Whether you're looking for daily walks or just a one time thing, we have a walker for your best friend</p>
                            </div>
                         
                        </div>
                    
                    <div className="reason">
                            <div className="photo-container">
                                <img className="hero-photo" src={checkmarkImage} alt="checkmark icon" />
                            </div>
                            <div className="text-container">
                                <h3>Book with trusted walkers</h3>
                                <p>Walkers are vetted by us and rated by you</p>
                            </div>
                         
                    </div>
                    <div className="reason">
                            <div className="photo-container">
                                <img className="hero-photo" src={clock} alt="clock icon" />
                            </div>
                            <div className="text-container">
                                <h3>Up to the minute booking</h3>
                                <p>Only a few taps can book you a walk - even in last minute situations!</p>
                            </div>
                         
                    </div>
                    
                    
                
                   
                </div>
                <div className="book-now">
                   
                    
                        <Link className="textlink" to={destination} style={{ textDecoration: 'none' }}>
                            <button 
                                type="button"
                                className="hero-button">
                                    Book Now
                            </button>
                        </Link>
                    </div>  
            </div>
             
                    
                  
                        
                
                   
                   
               
              
            </section>

        )
    }
}

export default LandingPage;

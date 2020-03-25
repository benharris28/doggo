import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'

class LandingPage extends React.Component {
    render() {
        return (
            <section className="LandingPage">
                <div className="landing_page_hero">
                    <h2>
                        Book a walk with dog walkers near you
                    </h2>
                    <Link to='/login'>
                        <button 
                            type="button">
                                Book Now
                            </button>
                    </Link>
                </div>
                <div className="landing_page_hero_2">
                    <h2>
                        Copy #2
                    </h2>
                    <Link to='/login'>
                        <button 
                            type="button">
                                Book Now
                            </button>
                    </Link>
                   
                </div>
                <div className="landing_page_hero_3">
                    <h2>
                        Copy #3
                    </h2>
                    <Link to='/login'>
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

import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

class Footer extends React.Component {
    render() {
        return (
            <div className='footer'>
                <h2 className="footer-title">
                    <Link to='/'>
                        Doggo
                    </Link>
                </h2>
            </div>
        )
    }
}

export default Footer;
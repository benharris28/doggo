import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

class Footer extends React.Component {
    render() {
        return (
            <div className='footer'>
                <h3 className="footer-title">
                    <Link className="footer-link" to='/'>
                        Doggo
                    </Link>
                </h3>
            </div>
        )
    }
}

export default Footer;
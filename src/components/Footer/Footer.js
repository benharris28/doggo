import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

class Footer extends React.Component {
    render() {
        return (
            <div className='footer'>
                <h1>
                    <Link to='/'>
                        Footer
                    </Link>
                </h1>
            </div>
        )
    }
}

export default Footer;
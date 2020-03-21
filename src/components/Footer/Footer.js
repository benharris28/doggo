import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

class Footer extends React.Component {
    render() {
        return (
            <nav className='Header'>
                <h1>
                    <Link to='/'>
                        Footer
                    </Link>
                </h1>
            </nav>
        )
    }
}

export default Footer;
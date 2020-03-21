import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

class Header extends React.Component {
    render() {
        return (
            <nav className='Header'>
                <h1>
                    <Link to='/'>
                        Doggo
                    </Link>
                </h1>
            </nav>
        )
    }
}

export default Header;
import React from 'react'
import { Link } from 'react-router-dom'
import ApiContext from '../../ApiContext';
import TokenService from '../../services/token-service'
import './Header.css'

class Header extends React.Component {

static contextType = ApiContext;

  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    this.context.handleLogout()
  }




  renderLogoutLink() {
      const { loggedInUser } = this.context;
     
    return (
    <>
      <div className='Header__logged-in'>
        <Link
          onClick={this.handleLogoutClick}
          to='/'
          className="textlink">
          Logout
        </Link>
      </div>
      <div className="header-user-account">
        <Link
          to={`/user/${loggedInUser.user_id}`}
          className="textlink">
            My Account
        </Link>
      </div>
    </>
    )
  }

  renderLoginLink() {
    return (
      <div className='Header__not-logged-in'>
        <Link
          to='/login'
          className="textlink">
          Log in
        </Link>
        
      </div>
    )
  }

  render() {
    
    

    return <>
      <nav className='Header'>
        <h1>
          <Link to='/'
          className="textlink">
            {' '}

            Doggo
          </Link>
        </h1>
        
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>

      
    </>
  }
}

export default Header;
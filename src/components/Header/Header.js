import React from 'react'
import { Link } from 'react-router-dom'
import ApiContext from '../../ApiContext';
import './Header.css'

class Header extends React.Component {

static contextType = ApiContext;

  handleLogoutClick = () => {
    this.context.handleLogout()
  }




  renderLogoutLink() {
      const { loggedInUser } = this.context;
      console.log(loggedInUser)
    return (
    <>
      <div className='Header__logged-in'>
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
      </div>
      <div className="header-user-account">
        <Link
          to={`/user/${loggedInUser.user_id}`}>
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
          to='/login'>
          Log in
        </Link>
        
      </div>
    )
  }

  render() {
    const { loggedIn } = this.context;
    const locale = this.props.match
    console.log(loggedIn)
    console.log(locale)

    return <>
      <nav className='Header'>
        <h1>
          <Link to='/'>
            {' '}
            Doggo
          </Link>
        </h1>
        
        {loggedIn && locale !== {}
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>

      
    </>
  }
}

export default Header;
import React from 'react';
import { Route, Link } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';
import ApiContext from '../../ApiContext';
import './LoginPage.css'


// Make Login form and import

class LoginPage extends React.Component {
    static contextType = ApiContext;

    static defaultProps = {
        location: {},
        history: {
          push: () => {},
        },
      }

    
    //usertype will be passed to this function
    // push either acount page for walkers or walker listing for users
    
    handleLoginSuccessApi = (user) => {
        const { location, history } = this.props;
        
    }

    handleLoginSuccess = (userType, loggedInUser) => {

        const { location, history } = this.props;
        

        console.log(location.state)
        // Still don't understand below...
        //const destination = (location.state || {}).from || '/'
        // 
        const destination = userType === 'user' ? '/walker' : `/user/${loggedInUser.user_id}`
        this.context.handleLogin(userType, loggedInUser)
        history.push(destination)
    }

    render() {
        return (
            <section className="login-page">
                <div className="newRegister">
                    {this.context.newUser === true && 
                        <p>Thank you for creating a new account! Please login below</p>}
                </div>
                <div>
                    <LoginForm 
                        onLoginSuccess={this.handleLoginSuccess} />
                </div>
                <div>
                    Don't have an account?
                    <Link
                        to={'/register'}>
                            Click here to sign up!
                    </Link>
                </div>

            </section>
        )
    }
}

export default LoginPage;
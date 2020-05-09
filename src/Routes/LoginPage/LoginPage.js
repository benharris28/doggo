import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';
import ApiContext from '../../ApiContext';
import './LoginPage.css'



class LoginPage extends React.Component {
    static contextType = ApiContext;

    static defaultProps = {
        location: {},
        history: {
          push: () => {},
        },
      }

    
   
    

    handleLoginSuccess = (userType, loggedInUser) => {

        const { history } = this.props;
        

        
        const destination = userType === 'user' ? '/walker' : `/user/${loggedInUser.user_id}`
        this.context.handleLogin(userType, loggedInUser)
        history.push(destination)
    }

    render() {
        return (
            <section className="registration-login-page">
                <div className="newRegister">
                    {this.context.newUser === true && 
                        <p>Thank you for creating a new account! Please login below</p>}
                </div>
                <div className="login-form-container">
                    <LoginForm 
                        onLoginSuccess={this.handleLoginSuccess} />
                </div>
                <hr className="login-break"></hr>
                <div className="register">
                    <h3>New to Doggo?</h3>
                    <p>It’s easy to set up your account. Click the link below to start browsing dogwalkers</p>
                    <Link
                        to={'/register'}>
                            <button className="register">
                                Sign Up
                            </button>
                            
                    </Link>
                </div>
                <div className="tester-helper">

                    <h3>Working logins:</h3>
                    <p>For a user: testuser1@testy.com password: TestUser1! </p>
                    <p>For a walker: testwalker1@testy.com password: TestWalker1!</p>

                </div>

            </section>
        )
    }
}

export default LoginPage;
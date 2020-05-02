import React from 'react';
import { Link } from 'react-router-dom';
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
    
    

    handleLoginSuccess = (userType, loggedInUser) => {

        const { history } = this.props;
        

        
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
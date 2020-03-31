import React from 'react';
import { Route, Link } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm'

// Make Login form and import

class LoginPage extends React.Component {
    static defaultProps = {
        location: {},
        history: {
          push: () => {},
        },
      }

    // Need explanation for this function
    handleLoginSuccess = () => {

        const { location, history } = this.props;
        console.log(location.state)
        // Still don't understand below...
        //const destination = (location.state || {}).from || '/'
        history.push('/walker')
    }

    render() {
        return (
            <section className="login-page">

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
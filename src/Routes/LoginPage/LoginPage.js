import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm'

// Make Login form and import

class LoginPage extends React.Component {
    static defaultProps = {
        history: {
            push: () => {},
        }
    }

    // Need explanation for this function
    handleLoginSuccess = () => {
        const { location, history } = this.props;
        const destination = (location.state || {}).from || '/'
        history.push(destination)
    }

    render() {
        return (
            <section className="login-page">

                <h2>
                    Login Form
                </h2>
                <div>
                    <LoginForm />
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
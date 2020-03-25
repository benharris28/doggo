import React from 'react';
import { Link } from 'react-router-dom';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'

// Make Login form and import

class RegistrationPage extends React.Component {
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

                <div>
                    <RegistrationForm />
                </div>
                <div>
                    Already have an account?
                    <Link
                        to={'/login'}>
                            Click here to login
                    </Link>
                </div>

            </section>
        )
    }
}

export default RegistrationPage;
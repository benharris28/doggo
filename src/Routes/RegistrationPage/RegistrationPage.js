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

  
    handleRegistrationSuccess = (user) => {
        const { history } = this.props;
        console.log(history)
        history.push('/login')
    }

    render() {
        return (
            <section className="login-page">

                <div>
                    <RegistrationForm 
                        onRegistrationSuccess={this.onRegistrationSuccess}/>
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
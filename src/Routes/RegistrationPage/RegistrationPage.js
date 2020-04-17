import React from 'react';
import { Link } from 'react-router-dom';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import ApiContext from '../../ApiContext';


// Make Login form and import

class RegistrationPage extends React.Component {
    static contextType = ApiContext;

    static defaultProps = {
        history: {
            push: () => {},
        }
    }

  
    handleRegistrationSuccess = (user) => {
        const { history } = this.props;
        console.log(history)
        this.context.handleNewRegistration()
        history.push('/login')
    }

    render() {
        return (
            <section className="login-page">

                <div>
                    <RegistrationForm 
                        onRegistrationSuccess={this.handleRegistrationSuccess}/>
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
import React from 'react';
import ApiContext from '../../ApiContext';

class LoginForm extends React.Component {
    
    static contextType = ApiContext;
    
    static defaultProps = {
        onLoginSuccess: () => {}
      }

      state = {
          email: '',
          password: ''
      }
      // Fetch request to /login or signin endpoint
      // in then block (if successfuk), will get response from API
      // Response should contain usertype
      // Pass usertype as parameter to onLoginSuccess
      
    handleSubmit = (e) => {
        e.preventDefault();
        const { email } = this.state;
        const { users } = this.context;
        const userRef = users.find(user => user.email === email);
        const userType = userRef.type;

        
        this.props.onLoginSuccess(userType, userRef);
    }

    updateEmail = (email) => {
        this.setState({
            email: email
        })
    }

    updatePassword = (password) => {
        this.setState({
            password: password
        })
    }
    
    render() {
        return (
            <>
                <form 
                    className="signup-form"
                    onSubmit={this.handleSubmit}
                    >
                    <h3>
                        Login to your Doggo account
                    </h3>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input 
                            type="text" 
                            name="email" 
                            placeholder="youremail@email.com"
                            onChange={e => this.updateEmail(e)}
                            required />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input 
                            type="text" 
                            name="password" 
                            placeholder="enter password"
                            onChange={e => this.updatePassword(e)} 
                            required />
                    </div>
              
                    <button
                        type="submit">
                        
                            Sign In
                    </button>
            </form>

            
        </>
        )
    }
}

export default LoginForm;
import React from 'react';

class LoginForm extends React.Component {
    static defaultProps = {
        onLoginSuccess: () => {}
      }

      // Fetch request to /login or signin endpoint
      // in then block (if successfuk), will get response from API
      // Response should contain usertype
      // Pass usertype as parameter to onLoginSuccess
      
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onLoginSuccess();
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
                        <input type="text" name="email" placeholder="youremail@email.com" required />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" placeholder="enter password" required />
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
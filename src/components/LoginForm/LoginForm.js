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
        console.log(this.state)
        const { email } = this.state;
        const { users } = this.context;
        const selectUser = users.find(user => user.email == email)
        const loggedInUser = this.getLoggedInUser(users, email)
        console.log(loggedInUser)
        const userType = loggedInUser.type;

        
        this.props.onLoginSuccess(userType, loggedInUser);
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

    getLoggedInUser = (users=[], email) => {
        console.log(users)
        return users.find(user => user.email == email)

        
    }
    
    render() {
        const { email } = this.state;
        const { users } = this.context;
        
        
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
                            onChange={e => this.updateEmail(e.target.value)}
                            required />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input 
                            type="text" 
                            name="password" 
                            placeholder="enter password"
                            onChange={e => this.updatePassword(e.target.value)} 
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
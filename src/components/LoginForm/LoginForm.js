import React from 'react';
import ApiContext from '../../ApiContext';
import AuthApiService from '../../services/auth-api-service';
import TokenService from '../../services/token-service'
import './LoginForm.css'


class LoginForm extends React.Component {
    
    static contextType = ApiContext;
    
    static defaultProps = {
        onLoginSuccess: () => {}
      }

      state = {
          email: '',
          password: '',
          error: null
      }
      // Fetch request to /login or signin endpoint
      // in then block (if successfuk), will get response from API
      // Response should contain usertype
      // Pass usertype as parameter to onLoginSuccess
      
    handleApiSubmit = (e) => {
        e.preventDefault()
        const { email, password, error} = this.state;

        this.setState({ error: null})

        AuthApiService.postLogin({
            email: email,
            password: password,
        })

        .then(res => {
            
        
            TokenService.saveAuthToken(res.authToken)
            const userType = res.dbUser.user_type;
            const user = res.dbUser;
            this.props.onLoginSuccess(userType, user)
        })
        .catch(res => {
            this.setState({ error: res.error })
        })
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
        
        return users.find(user => user.email == email)

        
    }
    
    render() {
        const { error } = this.state;
        
        
        return (
            <>
                <form 
                    className="signup-form"
                    onSubmit={this.handleApiSubmit}
                    >
                    <h3>
                        Login to your Doggo account
                    </h3>
                    <div className="error-bar" role='alert'>
                        {error && <p className='red'>{error}</p>}
                    </div>
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
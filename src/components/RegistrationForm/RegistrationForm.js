import React from 'react';
import AuthApiService from '../../services/auth-api-service'

// How can I build a mock account page?
class RegistrationForm extends React.Component {
    
  state = {
    error: null
  }
  
  handleSubmit = (e) => {
        e.preventDefault(e);
        const { first_name , last_name, email, password, user_type} = e.target

        AuthApiService.postUser({
          email: email.value,
          password: password.value,
          first_name: first_name.value,
          last_name: last_name.value,
          user_type: user_type.value
        })
        .then(user => {
          email.value = ''
          password.value = ''
          first_name.value = ''
          last_name.value = ''
          user_type.value = ''
          this.props.onRegistrationSuccess()
        })
        .catch(res => {
          this.setState({ error: res.error})
        })
    }
    
    render() {
        return (
            <>
            <form id="signup-form">
              <h3>
                Signup for Doggo!
              </h3>
              <p>We just need a few details to get your account up and running</p>
              
              <div>
                <label htmlFor="first_name">First Name</label>
                <input type="text" name="first_name" required />
              </div>
              
              <div>
                <label htmlFor="last_name">Last Name</label>
                <input type="text" name="last_name" required />
              </div>
              
              
              <div>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" placeholder="youremail@email.com" required />
              </div>
              
              <div>
                <label htmlFor="password">Create Password</label>
                <input type="text" name="password" placeholder="enter password" required />
              </div>

              <div>
                <label htmlFor="repeat_password">Repeat Password</label>
                <input type="text" name="repeat_password" placeholder="enter password" required /> 
              </div>

              <div>
                <label htmlFor="user_type">What type of account</label>
                <select id="user_type">
                  <option value="dog-owner">Dog Owner</option>
                  <option value="dog-walker">Dog Walker</option>
                  <option value="dog-owner-walker">Dog Owner and Walker</option>
                  
                  
                </select>
              </div>
              <button
                type="submit"
                onSubmit={this.handleSubmit}>
                    Sign Up
                </button>
              

            </form>


            
        </>
        )
    }
}

export default RegistrationForm;
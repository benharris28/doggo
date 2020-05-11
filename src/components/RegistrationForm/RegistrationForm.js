import React from 'react';
import AuthApiService from '../../services/auth-api-service';
import './RegistrationForm.css'

class RegistrationForm extends React.Component {
    
  state = {
    error: null,
    email: '',
    password: '',
    password_touched: '',
    repeat_password: '',
    first_name: '',
    last_name: '',
    user_type: '',
    dog_name: null
  }

  handleSubmit = (e) => {
        e.preventDefault(e);
        const { first_name , last_name, email, password, user_type, dog_name} = this.state

        const user = {
          first_name,
          last_name,
          email,
          password,
          user_type,
          dog_name
        
        }

        this.setState({ error: null })

        AuthApiService.postUser(user)
        .then(res => {

          
          this.props.onRegistrationSuccess(res)
        })
        .catch(res => {
          this.setState({ error: res.error})
        })
    }

    updateFirstName = (first_name) => {
   
      this.setState({
        first_name: first_name
      })
    }

    updateLastName = (last_name) => {
   
      this.setState({
        last_name: last_name
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

    updateRepeatPassword = (repeatPassword) => {
   
      this.setState({
        repeat_password: repeatPassword
      })
    }

    updateUserType = (e) => {
      e.preventDefault()
     
      this.setState({
        user_type: e.target.value
      })
    }

    updateDogName = (dog_name) => {
   
      this.setState({
        dog_name: dog_name
      })
    }

    validateSelection = (selection) => {
      if(selection === "selectone") {
        return (
          <p>Please select an account type</p>
        )
          
      }
    }



    
    
    render() {
      const { error, repeat_password, password } = this.state;
     
        return (
            <>
            <form 
              id="signup-form"
              onSubmit={e => this.handleSubmit(e)}>
              
              
              
              <div className="error-bar" role='alert'>
                {error && <p className='red'>{error}</p>}
              </div>
              
              <div>
                
                <input 
                  type="text" 
                  name="first_name"
                  placeholder="First Name"
                  onChange={e => this.updateFirstName(e.target.value)} 
                  required />
              </div>
              
              <div>
                
                <input 
                  type="text" 
                  name="last_name"
                  placeholder="Last Name"
                  onChange={e => this.updateLastName(e.target.value)}
                  required />
              </div>
              
              
              <div>
                
                <input 
                  type="text" 
                  name="email" 
                  placeholder="Email Address"
                  onChange={e => this.updateEmail(e.target.value)}
                  required />
              </div>
              
              <div className="password-box">
                
                <input 
                  type="password" 
                  name="password" 
                  placeholder="Password"
                  onChange={e => this.updatePassword(e.target.value)}
                  required />
                 
              </div>

              <div>
                
                <input 
                  type="password" 
                  name="repeat_password" 
                  placeholder="Re-enter password" 
                  onChange={e => this.updateRepeatPassword(e.target.value)}
                  required /> 

                  
              </div>
              <div>
                {repeat_password !== password ? <p>Passwords do not mach</p> : null}
              </div>

              <div className="account-type-box">
                
                <select 
                  name="user-type"
                  id="user_type"
                  onChange={this.updateUserType}
                  required
                  >
                  <option value="selectone" selected>Select Account Type</option>
                  <option value="user">Dog Owner</option>
                  <option value="walker">Dog Walker</option>
                  
                  
                  
                </select>
                </div>
              <div className="error-bar">
                {this.state.user_type === "selectone" && 
                  <div>
                    Please select an account type
                  </div>}
              </div>

                {this.state.user_type === "user" && 
                
                <div>
                  
                <label htmlFor="dog_name">What is your dog's name?</label>
                <input 
                  type="text" 
                  name="dog_name"
                  onChange={e => this.updateDogName(e.target.value)}
                  required /> 
              </div>
                }
              
              <button
                type="submit"
                >
                    Sign Up
                </button>
              

            </form>


            
        </>
        )
    }
}

export default RegistrationForm;
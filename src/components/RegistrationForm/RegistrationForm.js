import React from 'react';
import AuthApiService from '../../services/auth-api-service'

class RegistrationForm extends React.Component {
    
  state = {
    error: null,
    email: '',
    password: '',
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

    updateUserType = (e) => {
      e.preventDefault()
      console.log(this.state.user_type)
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
      console.log(this.state)
        return (
            <>
            <form 
              id="signup-form"
              onSubmit={e => this.handleSubmit(e)}>
              <h3>
                Signup for Doggo!
              </h3>
              <p>We just need a few details to get your account up and running</p>
              
              
              <div>
                <label htmlFor="first_name">First Name</label>
                <input 
                  type="text" 
                  name="first_name"
                  onChange={e => this.updateFirstName(e.target.value)} 
                  required />
              </div>
              
              <div>
                <label htmlFor="last_name">Last Name</label>
                <input 
                  type="text" 
                  name="last_name"
                  onChange={e => this.updateLastName(e.target.value)}
                  required />
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
                <label htmlFor="password">Create Password</label>
                <input 
                  type="text" 
                  name="password" 
                  placeholder="enter password"
                  onChange={e => this.updatePassword(e.target.value)}
                  required />
              </div>

              <div>
                <label htmlFor="repeat_password">Repeat Password</label>
                <input type="text" name="repeat_password" placeholder="enter password" required /> 
              </div>

              <div>
                <label htmlFor="user_type">What type of account</label>
                <select 
                  id="user_type"
                  onChange={this.updateUserType}
                  >
                  <option value="selectone" selected>Please select one</option>
                  <option value="user">Dog Owner</option>
                  <option value="walker">Dog Walker</option>
                  
                  
                  
                </select>
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
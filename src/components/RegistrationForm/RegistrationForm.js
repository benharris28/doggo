import React from 'react';

// How can I build a mock account page?
class RegistrationForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault(e);

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
                <label htmlFor="first-name">First Name</label>
                <input type="text" name="first-name" required />
              </div>
              
              <div>
                <label htmlFor="last-name">Last Name</label>
                <input type="text" name="last-name" required />
              </div>
              
              <div>
                <label htmlFor="zip-code">ZIP Code</label>
                <input type="text" name="zip-code" required />
              </div>
              
              <div>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" placeholder="youremail@email.com" required />
              </div>
              
              <div>
                <label htmlFor="create-password">Create Password</label>
                <input type="text" name="create-password" placeholder="enter password" required />
              </div>

              <div>
                <label htmlFor="repeat-password">Repeat Password</label>
                <input type="text" name="repeat-password" placeholder="enter password" required /> 
              </div>

              <div>
                <label htmlFor="account-type">What type of account</label>
                <select id="account-type">
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
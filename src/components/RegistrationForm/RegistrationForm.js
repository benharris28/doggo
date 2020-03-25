import React from 'react';

class RegistrationForm extends React.Component {
    handleSubmit() {
        
    }
    
    render() {
        return (
            <>
                <form id="registration-form">
                    <h3>
                        Sign up for Doggo!
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
                        type="submit"
                        onSubmit={this.handleSubmit}>
                            Sign In
                    </button>
            </form>

            
        </>
        )
    }
}

export default RegistrationForm;
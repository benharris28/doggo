import React from 'react';
import ApiContext from '../../ApiContext';
import WalkerApiService from '../../services/walker-api-service'
import './UploadBio.css';

class UploadBio extends React.Component {
    static contextType = ApiContext;
    
    state = {
        blurb: this.context.loggedInUser.bio,
        error: null,
        formOpen: false,
        submitted: ''
    }

    handleSubmit = (e) => {

        e.preventDefault();
        const { id } = this.props;

       
        
        
        const newBlurb = {
            bio: this.state.blurb

        }

     
        WalkerApiService.patchBio(id, newBlurb)
            .then(res => {
                this.setState({
                    error: false,
                    submitted: true,
                    formOpen: false
                })
                
            })
        }
        
        
        
        
    

    handleBlurb(blurb) {
        this.setState({
            blurb: blurb
        })
    }

    handleBioUpdateClick = (e) => {
        this.setState({
            formOpen: true
        })
    }
    
    render() {
        const {id , photo } = this.props;
        const { formOpen, blurb } = this.state;
     
        return (

            <div className="bio-section">
                <div className="current-bio">
                    <h3>Your current public bio says:</h3>
                    <p>{blurb}</p>
                    {formOpen === false && 
                    <button
                        onClick={this.handleBioUpdateClick}>
                            Update Bio
                    </button> }
                </div>

                <div className="bio-info">
        
                    {formOpen && 
                        <form
                            className="bio-form"
                            onSubmit={e => this.handleSubmit(e)}
                        >
                            <h3>Update a blurb for your profile bio!</h3>
                            <div className="update-blurb">
                            <label htmlFor="blurb">
                                What would you like your blurb to say?
                            </label>
                            <input 
                                type="text"
                                name="blurb"
                                onChange={e => this.handleBlurb(e.target.value)}
                                required
                            />

                                </div>
                                <div className="button-box">
                                    <button
                                        type="submit">
                                            Submit
                                    </button>
                                </div>
                                <div className="confirmation">
                                    {this.state.submitted === true && 
                                    <p>Submitted!</p>}
                                </div>
                        </form>
                    }
                    
                </div>
                
            </div>
            
        )
    }
}

export default UploadBio;
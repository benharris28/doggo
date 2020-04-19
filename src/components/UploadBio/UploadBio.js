import React from 'react';
import ApiContext from '../../ApiContext';
import WalkerApiService from '../../services/walker-api-service'
import './UploadBio.css';

class UploadBio extends React.Component {
    static contextType = ApiContext;
    
    state = {
        blurb: '',
        error: null,
        submitted: ''
    }

    handleSubmit = (e) => {

        e.preventDefault();
        const { id, history } = this.props;

        console.log(history)
        
        
        const newBlurb = {
            bio: this.state.blurb

        }

     
        WalkerApiService.patchBio(id, newBlurb)
            .then(res => {
                this.setState({
                    error: false,
                    submitted: true
                })
                //this.context.handleNewWalk(res)
            })
        }
        
        
        
        
    

    handleBlurb(blurb) {
        this.setState({
            blurb: blurb
        })
    }
    
    render() {
        const {id , photo } = this.props;
        console.log(id)
        return (

            <div className="bio-section">

                <div className="bio-info">
        
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
                  
                    
                    
                </div>
                
            </div>
            
        )
    }
}

export default UploadBio;
import React from 'react';
import './UploadPhoto.css';
import UserApiService from '../../services/user-api-service'

class UploadPhoto extends React.Component {
    state = {
        photo: ''
    }
    

    handleSubmit = (e) => {
        e.preventDefault()
        const { id } = this.props;
        
        const newPhoto = {
            profile_photo: this.state.photo

        }

        UserApiService.patchPhoto(id, newPhoto)
            .then(res => {
                this.setState({
                    photo: ''
                })
                
            })

    }

    updatePhoto = (event) => {
        this.setState({
            photo: event.target.files[0],
        })
    }


    render() {
        const {id , photo } = this.props;
        console.log(id)
        console.log(this.state.photo)
        return (

            <div className="bio-section">
                <div className="walker-image">
                    {photo 
                    ? <img src={photo} alt="profile photo"/>
                    : <img src="https://www.w3schools.com/howto/img_avatar.png" alt="profile photo avatar" />}
                    
                </div >
                <form 
                    className="upload-photo"
                    onSubmit={e => this.handleSubmit(e)}>
                    <input 
                        type="file"
                        name="profile-photo"
                        accept="image/x-png,image/gif,image/jpeg"
                        onChange={this.updatePhoto}
                    />
                    <div className="upload-button">
                        {this.state.photo && 
                            <button
                                type="submit">
                                Upload Photo
                            </button>}
                    </div>
                    
                </form>

                
                
            </div>
            
        )
    }
}

export default UploadPhoto;
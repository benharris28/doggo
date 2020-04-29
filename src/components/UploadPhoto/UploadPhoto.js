import React from 'react';
import './UploadPhoto.css';
import PhotoApiService from '../../services/photo-api-service'

class UploadPhoto extends React.Component {
    state = {
        photo: '',
        submitted: false
    }
    

    handleSubmit = (e) => {
        e.preventDefault()
        const { id } = this.props;
        const { photo } = this.state;
        
        
        const Key = photo.name
       
        const ContentType = photo.type

       
        

        PhotoApiService.putUrl(Key, ContentType)
            .then(res => {
                this.setState({
                    submitted: true
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
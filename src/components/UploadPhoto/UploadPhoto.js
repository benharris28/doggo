import React from 'react';
import './UploadPhoto.css';
import PhotoApiService from '../../services/photo-api-service'

class UploadPhoto extends React.Component {
    state = {
        photo: '',
        submitted: false,
        photo_url: ''
    }
    
    componentDidMount = () => {
        // Get profile photo from AWS
        
        const { photo } =  this.props
        
        photo ? 
        PhotoApiService.getImage(photo)
            .then(res => {
                console.log(res)
                this.setState({
                    photo_url: res.returnData.url
                })
                
            })
        : this.setState({
            photo_url: 'https://www.w3schools.com/howto/img_avatar.png'
        })

    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { id } = this.props;
        const { photo } = this.state;
        
        
        const fileName = photo.name
       
        const fileType = photo.type

        const file = {
            profile_photo: photo.name
        }

       
        

        PhotoApiService.uploadImage(fileName, fileType)
            .then(res => {
                this.setState({
                    submitted: true
                })
                
                PhotoApiService.updateImageInDB(id, file)
                
            })

    }

    updatePhoto = (event) => {
        this.setState({
            photo: event.target.files[0],
        })
    }


    render() {
        const {id , photo } = this.props;
        const { photo_url } = this.state;
        console.log(this.state)
       
        console.log(this.state.photo)
        return (

            <div className="bio-section">
                <div className="walker-image">
                    {photo 
                    ? <img src={photo_url} alt="profile photo"/>
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
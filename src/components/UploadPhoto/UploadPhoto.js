import React from 'react';
import './UploadPhoto.css';
import PhotoApiService from '../../services/photo-api-service'

class UploadPhoto extends React.Component {
    state = {
        photo_file: '',
        submitted: false,
        photo_url: ''
    }
    
    componentDidMount = () => {
        // Get profile photo from AWS
        
        const { photo, id } =  this.props
        const fileName = photo
        
        photo ? 
        PhotoApiService.getImage(fileName)
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
        const { photo_file } = this.state;
        
        const uuid = (Math.ceil(Math.random() * 10000))
        
        
        const fileName = `${uuid}user${id}profile`
       
        const fileType = photo_file.type

        const file = {
            profile_photo: fileName
        }

       
        

        PhotoApiService.uploadImage(fileName, fileType)
            .then(res => {
               
                this.setState({
                    submitted: true
                })

                const signedUrl = res.returnData.signedRequest
                
                PhotoApiService.updateImageInDB(id, file)
                PhotoApiService.putRequest(signedUrl, photo_file)
                    .then(res => {
               
                        PhotoApiService.getImage(fileName)
                            .then(res => {
                             
                                this.setState({
                                    photo_url: res.returnData.url
                                })
                            })
                    })
                    
            })

    }

    updatePhoto = (event) => {
        this.setState({
            photo_file: event.target.files[0],
        })
    }


    render() {
        const {id , photo } = this.props;
        const { photo_file, photo_url } = this.state;
        console.log(this.state)
        const uuid = (Math.ceil(Math.random() * 100))
        console.log(uuid)
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
                    Would you like to update your profile photo?

                    <input 
                        type="file"
                        name="profile-photo"
                        accept="image/x-png,image/gif,image/jpeg"
                        onChange={this.updatePhoto}
                    />
                    <div className="upload-button">
                        {this.state.photo_file && 
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
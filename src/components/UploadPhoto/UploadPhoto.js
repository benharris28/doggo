import React from 'react';
import './UploadPhoto.css';

class UploadPhoto extends React.Component {
    render() {
        const {id , photo } = this.props;
        console.log(id)
        return (

            <div className="bio-section">
                <div className="walker-image">
                    {photo 
                    ? <img src={photo} alt="profile photo"/>
                    : <img src="https://www.w3schools.com/howto/img_avatar.png" alt="profile photo avatar" />}
                    
                </div >

                
                
            </div>
            
        )
    }
}

export default UploadPhoto;
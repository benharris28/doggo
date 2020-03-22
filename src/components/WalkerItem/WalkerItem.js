import React from 'react';
import { Link } from 'react-router-dom';
import './WalkerItem.css';

class WalkerItem extends React.Component {
    // Need to add quotes to img sources to render properly
    render() {
        const {id , name, photo, postal, rating } = this.props;
        console.log(photo)
        return (

            <div className="walker-card">
                <div className="walker-image">
                
                <img src={photo} />
                </div >

                <div className="walker-info">
                    <p>{name}</p>
                    <p>Area: {postal}</p>
                    
                    Rating: {rating}
                </div>
                
            </div>
            
        )
    }
}

export default WalkerItem;
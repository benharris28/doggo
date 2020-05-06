import React from 'react';
import { Link } from 'react-router-dom';
import './WalkerItem.css';
import faker from 'faker';

class WalkerItem extends React.Component {
    render() {
        const {id , name, photo, postal, rating } = this.props;
        console.log(id)
        return (

            <div className="walker-card">
                <div className="walkerlist-image">
                
                    <div className="image-wrapper">
                        <img src={faker.image.avatar()} alt="avatar"/>
                    </div>
                </div >

                <div className="walkercard-info">
                    
                    <h4>{name}</h4>
                   
                    
                    {rating ? <p>Rating: {rating}</p> : <p>Rating: 5</p>}
                    
                    
                </div>
                
            </div>
            
        )
    }
}

export default WalkerItem;
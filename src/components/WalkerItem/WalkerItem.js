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
                <div className="walker-image">
                
         
                    <img src={faker.image.avatar()} alt="avatar"/>
         
                </div >

                <div className="walker-info">
                    
                    <h3>{name}</h3>
                   
                    
                    {rating ? <p>Rating: {rating}</p> : <p>Rating: 5</p>}
                    
                    
                </div>
                
            </div>
            
        )
    }
}

export default WalkerItem;
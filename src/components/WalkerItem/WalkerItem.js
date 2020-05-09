import React from 'react';
import './WalkerItem.css';
import faker from 'faker';

class WalkerItem extends React.Component {
    render() {
        const { name, rating } = this.props;
        
        return (

            <div className="walker-card">
                <div className="card-image">
                
                    <div className="image-wrapper">
                        <img src={faker.image.avatar()} alt="avatar"/>
                    </div>
                </div >

                <div className="card-info">
                    
                    <h4>{name}</h4>
                   
                    
                    {rating ? <p>Rating: {rating}</p> : <p>Rating: 5</p>}
                    
                    
                </div>
                
            </div>
            
        )
    }
}

export default WalkerItem;
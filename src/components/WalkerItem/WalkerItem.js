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
                    <Link to={`/walker/${id}`}>
                        {name}
                    </Link>
                    
                    {rating ? <p>Rating: {rating}</p> : <p>Rating: 5</p>}
                    
                    
                </div>
                
            </div>
            
        )
    }
}

export default WalkerItem;
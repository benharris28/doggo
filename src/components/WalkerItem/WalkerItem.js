import React from 'react';
import { Link } from 'react-router-dom';

class WalkerItem extends React.Component {
    render() {
        const {id , name } = this.props;
        return (
            <div>
                {name}
            </div>
            
        )
    }
}

export default WalkerItem;
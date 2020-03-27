import React from 'react';
import { Link } from 'react-router-dom';

class WalkItem extends React.Component {
    render() {
        const { walk, walker, date, status } = this.props;
        return (
            <div>
                <Link
                    to={`/walk/${walk}`}>
            <div>
               <p>Walker: {walker}</p>
                <p>Date: {date}</p>
                <p>Status: {status}</p>

            </div>
            </Link>
            </div>
        )
    }
}

export default WalkItem;
import React from 'react';
import ApiContext from '../../ApiContext';
import { Link } from 'react-router-dom';

class WalkPage extends React.Component {
    static contextType = ApiContext;

    render() {
        const { walk_id } = this.props.match.params;
        const { walks } = this.context;


        return (
            <div>Hello</div>
            
        )
    }
}

export default WalkPage;
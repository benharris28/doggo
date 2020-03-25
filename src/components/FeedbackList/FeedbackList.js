import React from 'react';
import ApiContext from '../../ApiContext';


class FeedbackList extends React.Component {
    static contextType = ApiContext;

    render() {
        const { id } = this.props;
        console.log(id)
        const { walks=[] } = this.context;
        console.log(walks)
        
        // I can't get this work...
        const getFeedbackForWalker = (walks, id) => (
            (!id)
            ? walks
            : walks.filter(walk => walk.walker-id === id)
            )
        
        console.log(getFeedbackForWalker)
        return (
            <section className="walker-feedback-list">
                <ul>
                   
                </ul>
            </section>
            
        )
    }
}

export default FeedbackList;
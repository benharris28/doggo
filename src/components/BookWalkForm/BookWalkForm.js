import React from 'react';

class BookWalkForm extends React.Component {
    
    // How should I convert a new walk entry to json?
    // Should new walk be added to state?
    // When user logs in in for the first time, send all data that is required to context
    state = {
        walk_id: 4,
        walker_id: '',
        user_firstname: '',
        dog_name: '',
        walker_firstname: '',
        user_id: '',
        request_time: '',
        walk_date: '',
        pickup_address_street_number: '',
        pickup_address_street_name: '',
        pickup_address_city: '',
        pickup_address_province: '',
        pickup_address_postal_code: '',

    }
// Build out onsubmit

    handleSubmit = () => {
        // Fetch request (contains a post)
        // Some values are coming from context (this.context.user_id, etc)
        // Create new object with complete walk item
        // Update context in the then block
        const { id, name } = this.props;
        const { 
            walk_id, 
            walk_date, 
            pickup_address_street_number,
            pickup_address_street_name,
            pickup_address_city,
            pickup_address_province,
            pickup_address_postal_code

        } = this.state;

        
        const newWalk = {

        }
    }

    // Add onChange events for each input in the form to add to state

    

    render() {
        const { name, id } = this.props;
        
        return (
            <form
                className="book-walk-form"
                onSubmit={this.handleSubmit}
                >
                <h3>{`Book a walk with ${name}`}</h3>
                <div className="book-walk-date">
                    <label htmlFor="book-walk-date">
                        When would you like to book a walk?
                    </label>
                    <input 
                        type="date"
                        name="book-walk-date"
                        required
                        />

                    </div>
                        
                    <div className="walk-time-input">
                        <label htmlFor="walk-time">
                            What time should your dog be picked up?
                        </label>
                        <input 
                            type="time" 
                            name="walk-time" 
                            required /> 
                    </div>

                    <div className="walk-address-input">
                        <label htmlFor="walk-date">
                            Where should your dog be picked up?
                        </label>
                        <input 
                            type="text" 
                            name="walk-address" 
                            required />
                    </div>
                    <div className="button-box">
                        <button type="submit">
                            Request Walk
                        </button>
                    </div>
                       

            </form>
        )
    }
}

export default BookWalkForm;
            
            
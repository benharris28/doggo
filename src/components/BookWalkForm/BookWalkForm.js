import React from 'react';

class BookWalkForm extends React.Component {
    
// Build out onsubmit

    onSubmit = () => {
        // Build out
    }
    
    render() {
        const { name, id } = this.props;
        
        return (
            <form>
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
            
            
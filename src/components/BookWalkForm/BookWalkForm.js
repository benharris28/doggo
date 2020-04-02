import React from 'react';
import ApiContext from '../../ApiContext';

class BookWalkForm extends React.Component {
    static contextType = ApiContext;
    // How should I convert a new walk entry to json?
    // Should new walk be added to state?
    // When user logs in in for the first time, send all data that is required to context
    state = {
        
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


    handleSubmit = (e) => {
        // Fetch request (contains a post)
        // Some values are coming from context (this.context.user_id, etc)
        // Create new object with complete walk item
        // Update context in the then block
        e.preventDefault();
        const { id } = this.props;
        const { users, walkers, walks } = this.context;
        const walkNum = walks.length;
        const newWalkId = walkNum + 1;
        
        
        const selectUser =  users;
           
        const selectWalker =  walkers.find(walker => walker.user_id == id && walker.type === 'walker')

        //const userFind = selectUser(users, id)

        //console.log(userFind)
        console.log(this.state)

        const { 
           
            walk_date, 
            request_time,
            pickup_address_street_number,
            pickup_address_street_name,
            pickup_address_city,
            pickup_address_province,
            pickup_address_postal_code

        } = this.state;

        
        const newWalk = {
            walk_id: newWalkId,
            walker_id: id,
            user_firstname: selectUser.user_firstname,
            dog_name: selectUser.dog_name,
            walker_firstname: selectWalker.user_firstname,
            user_id: selectUser.user_id,
            request_time,
            walk_date,
            pickup_address_street_number,
            pickup_address_street_name,
            pickup_address_city,
            pickup_address_province,
            pickup_address_postal_code,
            status: "requested",

        }
        console.log(newWalk)

        this.context.handleNewWalk(newWalk)
    }
   

    // Add onChange events for each input in the form to add to state

    handleWalkDate(walk_date) {
        this.setState({
            walk_date: walk_date
        })
    }

    handleWalkTime(walk_time) {
        this.setState({
            request_time: walk_time
        })
    }

    handleWalkTime(walk_time) {
        this.setState({
            request_time: walk_time
        })
    }

    handleStreetName(street) {
        this.setState({
            pickup_address_street_name: street
        })
    }

    handleStreetNumber(number) {
        this.setState({
            pickup_address_street_number: number
        })
    }

    handleCity(city) {
        this.setState({
            pickup_address_city: city
        })
    }

    handlePostalCode(postal) {
        this.setState({
            pickup_address_postal_code: postal
        })
    }

    render() {
        const { id, name } = this.props;
        const { walkers } = this.context;
        const selectedWalker = walkers.find(walker => walker.id == id)
        
        return (
            <form
                className="book-walk-form"
                onSubmit={e => this.handleSubmit(e)}
                >
                <h3>{`Book a walk with ${name}`}</h3>
                <div className="book-walk-date">
                    <label htmlFor="book-walk-date">
                        When would you like to book a walk?
                    </label>
                    <input 
                        type="date"
                        name="book-walk-date"
                        onChange={e => this.handleWalkDate(e.target.value)}
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
                            onChange={e => this.handleWalkTime(e.target.value)}
                            required /> 
                    </div>
                    {' '}
                    Where should your dog be picked up?
                    <div className="street-number-input">
                        <label htmlFor="street-number">
                            Street Number
                        </label>
                        <input 
                            type="number" 
                            name="street_number" 
                            onChange={e => this.handleStreetNumber(e.target.value)}
                            required />
                    </div>
                    <div className="street-input">
                        <label htmlFor="street">
                            Street Name
                        </label>
                        <input 
                            type="text" 
                            name="street" 
                            onChange={e => this.handleStreetName(e.target.value)}
                            required />
                    </div>
                    <div className="city-input">
                        <label htmlFor="city">
                            City
                        </label>
                        <input 
                            type="text" 
                            name="city"
                            onChange={e => this.handleCity(e.target.value)}
                            required />
                    </div>
                    <div className="postal-code-input">
                        <label htmlFor="postal-code">
                            Postal Code
                        </label>
                        <input 
                            type="text" 
                            name="postal-code"
                            onChange={e => this.handlePostalCode(e.target.value)}
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
            
            
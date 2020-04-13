import React from 'react';
import ApiContext from '../../ApiContext';
import WalkApiService from '../../services/walk-api-service';

class BookWalkForm extends React.Component {
    static contextType = ApiContext;
    // How should I convert a new walk entry to json?
    // Should new walk be added to state?
    // When user logs in in for the first time, send all data that is required to context
    static defaultProps = {
        location: {},
        history: {
          push: () => {},
        },
      }
   
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
        submitted: false

    }


    handleSubmit = (e) => {
        // Fetch request (contains a post)
        // Some values are coming from context (this.context.user_id, etc)
        // Create new object with complete walk item
        // Update context in the then block

        e.preventDefault();
        const { id, history } = this.props;
        console.log(history)

        const { users, walkers, walks, loggedInUser } = this.context;

       
        
        
        const selectUser =  users;
           
        const selectWalker =  walkers.find(walker => walker.user_id == id && walker.user_type === 'walker')

        // set state to submit: true

        
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
            walker_id: id,
            user_firstname: loggedInUser.first_name,
            dog_name: loggedInUser.dog_name,
            walker_firstname: selectWalker.first_name,
            user_id: loggedInUser.user_id,
            request_time,
            walk_date,
            pickup_address_street_number,
            pickup_address_street_name,
            pickup_address_city,
            pickup_address_province,
            pickup_address_postal_code,
            walk_status: "requested",

        }
        console.log(newWalk)

        // API Call
        WalkApiService.createWalk(newWalk)
            .then(res => {
                this.context.handleNewWalk(res)

                this.setState({
                    submitted: true
                }, () => {
                    setTimeout(() => {
                        this.setState({
                            submitted: false
                        }, () => {
                            this.props.handleBackToSearch()
                        })
                    }, 4000)
                })
            })

        
        
        
        
    }
   

    // how can i conditionally render a "submitted" notification
    

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

    handleProvince(province) {
        this.setState({
            pickup_address_province: province
        })
    }

    handlePostalCode(postal) {
        this.setState({
            pickup_address_postal_code: postal
        })
    }

    render() {
        const { id, name } = this.props;
        const { walkers, walks } = this.context;
        const selectedWalker = walkers.find(walker => walker.id == id)
        const walkNum = walks.length;
        console.log(walkNum)
        
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
                    <div className="province-input">
                    <label htmlFor="province">
                            Province
                        </label>
                        <input 
                            type="text" 
                            name="province"
                            onChange={e => this.handleProvince(e.target.value)}
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
                    {this.state.submitted && 
                    <div className="submit-confirmation">
                        <p>Request submitted!</p>
                    </div>
                    }

            </form>
        )
    }
}

export default BookWalkForm;
            
            
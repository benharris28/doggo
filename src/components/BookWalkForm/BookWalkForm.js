import React from 'react';
import ApiContext from '../../ApiContext';
import WalkApiService from '../../services/walk-api-service';
import moment from 'moment';
import './BookWalkForm.css'


class BookWalkForm extends React.Component {
    static contextType = ApiContext;
    
    static defaultProps = {
        location: {},
        history: {
          push: () => {},
        },
      }
   
    state = {
        
        walker_firstname: '',
        user_id: '',
        walk_date: '',
        pickup_address_street_number: '',
        pickup_address_street_name: '',
        pickup_address_city: '',
        pickup_address_province: '',
        pickup_address_postal_code: '',
        submitted: false,
        date: '',
        time: ''
      

    }


    handleSubmit = (e) => {

        e.preventDefault();
        const { id } = this.props;

        const { walkers, loggedInUser } = this.context;

       
        
        
        
           
        const selectWalker =  walkers.find(walker => walker.user_id == id && walker.user_type === 'walker')


        const { 
           
            date,
            time, 
            pickup_address_street_number,
            pickup_address_street_name,
            pickup_address_city,
            pickup_address_province,
            pickup_address_postal_code

        } = this.state;

        const momentObj = moment(date + time, 'YYYY-MM-DDLT');
        const dateTime = momentObj.format('YYYY-MM-DDTHH:mm');

        const newWalk = {
            walker_id: id,
            user_firstname: loggedInUser.first_name,
            dog_name: loggedInUser.dog_name,
            walker_firstname: selectWalker.first_name,
            user_id: loggedInUser.user_id,
            walk_date: dateTime,
            pickup_address_street_number,
            pickup_address_street_name,
            pickup_address_city,
            pickup_address_province,
            pickup_address_postal_code,
            walk_status: "requested",

        }
       


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

    handleTime(time) {
        this.setState({
            time
        })
    }

    handleDate(date) {
        this.setState({
            date
        })
    }

   

    render() {
        const { name } = this.props;
        
       
       
        
      
        
        return (
            <form
                className="book-walk-form"
                onSubmit={e => this.handleSubmit(e)}
                >
                <h3>{`Book a walk with ${name}`}</h3>
                    
                    <div className="date-input">
                    <label htmlFor="date">
                            Requested date
                        </label>
                    <input 
                            type="date" 
                            name="date"
                            onChange={e => this.handleDate(e.target.value)}
                            required /> 
                    </div>
                    <div className="time-input">
                    <label htmlFor="time">
                            Requested time
                        </label>
                    <input 
                            type="time" 
                            name="time"
                            onChange={e => this.handleTime(e.target.value)}
                            required /> 
                  
                    </div>
                    

                    {' '}
                    <h3>Where should your dog be picked up?</h3>
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
            
            
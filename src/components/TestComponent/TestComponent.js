import React from 'react';
import { Link } from 'react-router-dom';
import { NiceDate } from '../../components/Utils/Utils'
import moment from 'moment';
import '../WalkItem/WalkItem.css'

class WalkItem extends React.Component {
    state = {
        walk_id: 1,
        walk_date: "2020-10-01T04:00:00.000Z"
       
        

    }
    renderButtons = () => {
        return (
            <>

            </>
        )
        
    }

    newDate = (dateToFormat) => {
        return moment(dateToFormat).format('MMM Do YYYY')
    }
    
    
    render() {
        
        const { walk_id, walk_date } = this.state

        
        const myDate = moment(new Date(walk_date)).format('MMM ddd DD YYYY')
        
      
        console.log(myDate)
       
       
        return (
          <div>Hello</div>
        )
    }
}

export default WalkItem;
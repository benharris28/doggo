import React from 'react';
import ApiContext from '../../ApiContext';
import { Link } from 'react-router-dom';
import WalkItem from '../../components/WalkItem/WalkItem';

class UserAccountPage extends React.Component {
    static contextType = ApiContext;
    
    render() {
        const { userType, loggedInUser, users, walks } = this.context
        const { user_id } = this.props.match.params;
        console.log(userType)
        console.log(user_id)
        console.log(walks)
    
     

        const getWalks = (walks, userType, user_id) => (userType == "user") ? walks.filter(walk => walk.user_id == user_id) : walks.filter(walk => walk.walker_id == user_id)
        const walkList = getWalks(walks, userType, user_id)
        console.log(walkList)
        console.log(getWalks)

       
            
        return (
                <section className="walker-bio">
                    <div className="walker-image">
                        <img src={loggedInUser.profile_photo} />
                    </div>
                    <div className="walker-blurb">
                        <h3>{loggedInUser.first_name}</h3>
                        
                    </div>
                    <div className="user-walklist">
                        <ul>
                            {walkList.map(walk => 
                                <li className="walk-li" key={walk.user_id}>
                                <WalkItem
                                    walk={walk.walk_id}
                                    walker={walk.walker_firstname}
                                    date={walk.walk_date}
                                    status={walk.status}
                                    />
                                </li>)}

                        </ul>
                    </div>
                    <div className="button-box">
                        <Link
                            to='/walker'>
                                <button>
                                    Book a new walk
                                </button>
                        </Link>
                    </div>
                   
                   
                </section>
                
    
            )
        }
    }
    
    export default UserAccountPage;
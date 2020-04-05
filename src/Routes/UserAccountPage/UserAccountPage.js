import React from 'react';
import ApiContext from '../../ApiContext';
import { Link } from 'react-router-dom';
import WalkItem from '../../components/WalkItem/WalkItem';
import './UserAccountPage.css'

class UserAccountPage extends React.Component {
    static contextType = ApiContext;
    
    render() {
        const { userType, loggedInUser, users, walks } = this.context
        const { user_id } = this.props.match.params;
        console.log(userType)
        console.log(user_id)
        console.log(walks)
    
     

        const getWalks = (walks, userType, user_id) => (userType == "user") ? walks.filter(walk => walk.user_id == user_id && walk.status !== "requested") : walks.filter(walk => walk.walker_id == user_id && walk.status !== "requested")
        const walkList = getWalks(walks, userType, user_id)
        console.log(walkList)
        console.log(getWalks)

        const getWalkRequests = (walks, userType, user_id) => (userType == "user") ? walks.filter(walk => walk.user_id == user_id && walk.status === "requested") : walks.filter(walk => walk.walker_id == user_id && walk.status === "requested")
        const walkRequests = getWalkRequests(walks, userType, user_id)
            
        return (
                <section className="walker-bio">
                    <div className="walker-image">
                        <img src={loggedInUser.profile_photo} />
                    </div>
                    <div className="walker-blurb">
                        <h3>{loggedInUser.first_name}</h3>
                        
                    </div>
                    <div className="walk-requests">
                        <h2>Walk Requests</h2>
                    <ul>
                            {walkRequests.map(walk => 
                                <li className="walk-li" key={walk.walk_id}>
                                <WalkItem
                                    walk={walk.walk_id}
                                    walker={walk.walker_firstname}
                                    date={walk.walk_date}
                                    status={walk.status}
                                    />
                                </li>)}

                        </ul>
                    </div>

                    <div className="user-walklist">
                        <h2>Walk History</h2>
                        <ul>
                            {walkList.map(walk => 
                                <li className="walk-li" key={walk.walk_id}>
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
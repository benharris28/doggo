import React from 'react';
import ApiContext from '../../ApiContext';
import { Link } from 'react-router-dom';
import WalkItem from '../../components/WalkItem/WalkItem';
import UploadPhoto from '../../components/UploadPhoto/UploadPhoto'
import UploadBio from '../../components/UploadBio/UploadBio'
import './UserAccountPage.css'

class UserAccountPage extends React.Component {
    static contextType = ApiContext;
    
    handleWalkItem = () => {
            
    }

    render() {
        const { userType, loggedInUser, walks } = this.context
        const { user_id } = this.props.match.params;
    
     
        // Admin filters for walk displays
        const adminRequests = walks.filter(walk => walk.walk_status === "requested")
        const adminAccepted = walks.filter(walk => walk.walk_status === "accepted")
        const adminComplete = walks.filter(walk => walk.walk_status !== "requested" && walk.walk_status !== "accepted")
        
        // Filter walk lists based on loggedin usertype. Filter based on user_id for users and walker_id for walkers

        // Walk History List
        let walkList = [];

        const getWalks = (walks, userType, user_id) => (userType == "user") ? walks.filter(walk => walk.user_id == user_id && walk.walk_status !== "requested" && walk.walk_status !== "accepted") : walks.filter(walk => walk.walker_id == user_id && walk.walk_status !== "requested" && walk.walk_status !== "accepted")
        
        walkList = userType == "admin" ? adminComplete : getWalks(walks, userType, user_id)


        
        // Walk Request List
        let walkRequests = [];
        
        const getWalkRequests = (walks, userType, user_id) => (userType == "user") ? walks.filter(walk => walk.user_id == user_id && walk.walk_status === "requested") : walks.filter(walk => walk.walker_id == user_id && walk.walk_status === "requested")
       
        walkRequests = userType == "admin" ? adminRequests : getWalkRequests(walks, userType, user_id)
        
        
        // Upcoming Walk List
        let upcomingWalks = []
        
        const getUpcomingWalks = (walks, userType, user_id) => (userType == "user") ? walks.filter(walk => walk.user_id == user_id && walk.walk_status === "accepted") : walks.filter(walk => walk.walker_id == user_id && walk.walk_status === "accepted")
        
        upcomingWalks = userType == "admin" ? adminAccepted : getUpcomingWalks(walks, userType, user_id)
        
                    
        return (
                <section className="user-account-page">
                    <div className="walker-image">
                        <UploadPhoto
                            id={loggedInUser.user_id}
                            photo={loggedInUser.profile_photo}
                        />
                    </div>
                    <div className="walker-blurb">
                        <h3>{loggedInUser.first_name}</h3>
                        {userType === "walker" &&
                        <UploadBio 
                            id={loggedInUser.user_id}
                        />
                        }
                        
                    </div>
                    <div className="walk-requests">
                        <h2>Walk Requests</h2>
                        {walkRequests.length === 0 ? 'No walk requests yet' : null}
                    <ul>
                            {walkRequests.map(walk => 
                                <li className="walk-li" key={walk.walk_id}>
                                <WalkItem
                                    walk={walk.walk_id}
                                    user={walk.user_firstname}
                                    walker={walk.walker_firstname}
                                    date={walk.walk_date}
                                    walk_status={walk.walk_status}
                                    />
                                </li>)}

                        </ul>
                    </div>

                    <div className="upcoming-walks">
                        <h2>Upcoming Walks</h2>
                        {upcomingWalks.length === 0 ? 'No upcoming walks' : null}
                        <ul>
                            {upcomingWalks.map(walk => 
                                <li className="walk-li" key={walk.walk_id}>
                                <WalkItem
                                    walk={walk.walk_id}
                                    walker={walk.walker_firstname}
                                    date={walk.walk_date}
                                    walk_status={walk.walk_status}
                                    />
                                </li>)}

                        </ul>

                    </div>
                    
                    <div className="user-walklist">
                        <h2>Walk History</h2>
                        {walkList.length === 0 ? 'No walks yet' : null}
                        <ul>
                            {walkList.map(walk => 
                                <li className="walk-li" key={walk.walk_id}>
                                <WalkItem
                                    walk={walk.walk_id}
                                    walker={walk.walker_firstname}
                                    date={walk.walk_date}
                                    walk_status={walk.walk_status}
                                    />
                                </li>)}

                        </ul>
                    </div>
                    <div className="button-box">
                        {userType === "user" && 
                        <Link
                            to='/walker'>
                                <button>
                                    Book a new walk
                                </button>
                        </Link>
                        }
                    </div>
                   
                   
                </section>
                
    
            )
        }
    }
    
    export default UserAccountPage;
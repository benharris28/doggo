import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import NotFoundPage from './Routes/NotFoundPage/NotFoundPage';
import LandingPage from './Routes/LandingPage/LandingPage';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import LoginPage from './Routes/LoginPage/LoginPage';
import RegistrationPage from './Routes/RegistrationPage/RegistrationPage';
import WalkerListingPage from './Routes/WalkerListingPage/WalkerListingPage';
import UserAccountPage from './Routes/UserAccountPage/UserAccountPage';
import WalkerPage from './Routes/WalkerPage/WalkerPage';
import WalkPage from './Routes/WalkPage/WalkPage';
import ApiContext from './ApiContext';
import STORE from './STORE';
import Consumers from './Consumers';
import Walks from './Walks';

class App extends React.Component {
  state = {
    walkers: Consumers.users,
    users: [],
    loggedInUser: '',
    userType: '',
    walks: Walks.walks,
    loggedIn: false
  };

  
  componentDidMount() {
    // dummy logged in user is 1
    const users = Consumers.users;
    

    const walkersList = Consumers.users.filter(user => user.type === "walker")
    console.log(walkersList)
    
    this.setState({
      users: users,
      walkers: walkersList
    })
    
  }

  
  // Add componentDidMount function to get all data for context only for logged in user

  

  handleNewWalk = (newWalk) => {
    this.setState({
      walks: [...this.state.walks, newWalk]
    })
  }

  cancelWalk = (walk_id) => {
    // Make API call to cancel walk


      // Find specific walk in the walks array
      // Clone context of walks
      // Loop over state of walks, find specific walk_id
      // set walk = cancelled in loop function
      // Update state

      let clonedWalks = JSON.parse(JSON.stringify(this.state.walks));

      clonedWalks.forEach((walk) => {
        if (walk.walk_id == walk_id)
          walk.status = 'cancelled'
      });

      this.setState({
        walks: clonedWalks
      });

      console.log(this.state)

  }

  completeWalk = (walk_id) => {

      let clonedWalks = JSON.parse(JSON.stringify(this.state.walks));

      clonedWalks.forEach((walk) => {
        if (walk.walk_id == walk_id)
          walk.status = 'complete'
      });

      this.setState({
        walks: clonedWalks
      });
    }

    acceptWalk = (walk_id) => {

      let clonedWalks = JSON.parse(JSON.stringify(this.state.walks));

      clonedWalks.forEach((walk) => {
        if (walk.walk_id == walk_id)
          walk.status = 'accepted'
      });

      this.setState({
        walks: clonedWalks
      });
    }

    declineWalk = (walk_id) => {

      let clonedWalks = JSON.parse(JSON.stringify(this.state.walks));

      clonedWalks.forEach((walk) => {
        if (walk.walk_id == walk_id)
          walk.status = 'declined'
      });

      this.setState({
        walks: clonedWalks
      });
    }

    handleLogin = (userType, user) => {
      this.setState({
        loggedIn: true,
        loggedInUser: user,
        userType: userType
      })
    }
    
    handleLogout = () => {
      this.setState({
        loggedIn: false
      })
    }
      

  

  render() {
    const locale = this.props.match;
    console.log(locale)
    
    const value = {
      walkers: this.state.walkers,
      users: this.state.users,
      walks: this.state.walks,
      loggedInUser: this.state.loggedInUser,
      userType: this.state.userType,
      loggedIn: this.state.loggedIn,
      cancelWalk: this.cancelWalk,
      completeWalk: this.completeWalk,
      acceptWalk: this.acceptWalk,
      declineWalk: this.declineWalk,
      handleLogin: this.handleLogin,
      handleLogout: this.handleLogout,
      handleNewWalk: this.handleNewWalk
    };

    console.log(this.state)

    return (
      <ApiContext.Provider value={value}>
      <div className="doggo-app">
        <header className='App_header'>
          <Header 
            locale={this.props.match}/>
        </header>
        <main className='App_main'>
          <Switch>
            <Route
              exact
              path={'/'}
              component={LandingPage}
            />
            <Route
              exact
              path={'/login'}
              component={LoginPage}
              />
            <Route
              exact
              path={'/register'}
              component={RegistrationPage}
              />
            <Route
              exact
              path={'/walker'}
              component={WalkerListingPage}
            />
            <Route
              exact
              path={'/walker/:user_id'}
              component={WalkerPage}
            />
            <Route
              exact
              path={'/user/:user_id'}
              component={UserAccountPage}
              />
            <Route
              exact
              path={'/walk/:walk_id'}
              component={WalkPage}
              />
            <Route
              component={NotFoundPage}
            />
          </Switch>
        </main>
        <footer className="App_footer">
          <Footer />
        </footer>
      </div>
      </ApiContext.Provider>
    )
  }
}

export default App;

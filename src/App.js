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
import WalkApiService from './services/walk-api-service';
import PrivateRoute from './components/Utils/PrivateRoute';
import PublicOnlyRoute from './components/Utils/PublicOnlyRoute'

class App extends React.Component {
  state = {
    walkers: [],
    users: [],
    loggedInUser: '',
    userType: '',
    walks: [],
    loggedIn: false,
    newUser: false
  };


  

  handleNewWalk = (newWalk) => {
    this.setState({
      walks: [...this.state.walks, newWalk]
    })
  }

  cancelWalk = (walk_id) => {

      let clonedWalks = JSON.parse(JSON.stringify(this.state.walks));

      clonedWalks.forEach((walk) => {
        if (walk.walk_id == walk_id)
          walk.walk_status = 'cancelled'
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
          walk.walk_status = 'complete'
      });

      this.setState({
        walks: clonedWalks
      });
    }

    acceptWalk = (walk_id) => {

      let clonedWalks = JSON.parse(JSON.stringify(this.state.walks));

      clonedWalks.forEach((walk) => {
        if (walk.walk_id == walk_id)
          walk.walk_status = 'accepted'
      });

      this.setState({
        walks: clonedWalks
      });
    }

    declineWalk = (walk_id) => {

      let clonedWalks = JSON.parse(JSON.stringify(this.state.walks));

      clonedWalks.forEach((walk) => {
        if (walk.walk_id == walk_id)
          walk.walk_status = 'declined'
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
      
      if (userType == "user") {
        
         WalkApiService.getAllWalksForUserId(user.user_id)
       
        .then(walks => {
          this.setWalks(walks)
        
        })
        } else {
          WalkApiService.getAllWalksForWalkerId(user.user_id)
            .then(walks => {
              this.setWalks(walks)
              })
        }
      }

    setWalks = (walks) => {
      console.log(walks)
      this.setState({
        walks: walks
    })
    }  
    
    handleLogout = () => {
      this.setState({
        loggedIn: false
      })
    }
    
    handleWalkerList = (walkers) => {
      this.setState({
        walkers: walkers
      })
    }

    handleNewRegistration = () => {
      this.setState({
        newUser: true
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
      handleNewWalk: this.handleNewWalk,
      handleWalkerList: this.handleWalkerList,
      handleFeedback: this.handleFeedback,
      handleNewRegistration: this.handleNewRegistration,
      newUser: this.state.newUser
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
            <PrivateRoute
              path={'/walker'}
              component={WalkerListingPage}
            />
            <PrivateRoute
              path={'/walker/:user_id'}
              component={WalkerPage}
            />
            <PrivateRoute
              path={'/user/:user_id'}
              component={UserAccountPage}
              />
            <PrivateRoute
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

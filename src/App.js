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
    walkers: STORE.walkers,
    users: Consumers.users,
    walks: Walks.walks
  };

  cancelWalk = (walk_id) => {
    // should I create a new walk?
  }

  render() {
    const value = {
      walkers: this.state.walkers,
      users: this.state.users,
      walks: this.state.walks,
      cancelWalk: this.cancelWalk,
      completeWalk: this.completeWalk
    };

    return (
      <ApiContext.Provider value={value}>
      <div className="doggo-app">
        <header className='App_header'>
          <Header />
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
              path={'/walker/:walker_id'}
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

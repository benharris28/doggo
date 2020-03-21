import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import NotFoundPage from './components/NotFoundPage/NotFoundPage.js';
import LandingPage from './components/LandingPage/LandingPage.js';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import LoginPage from './components/LoginPage/LoginPage.js';
import WalkerListingPage from './components/WalkerListingPage/WalkerListingPage.js'

class App extends React.Component {
  render() {
    return (
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
              path={'/walker'}
              component={WalkerListingPage}
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
    )
  }
}

export default App;

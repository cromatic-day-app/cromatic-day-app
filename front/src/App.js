import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import AuthService from './components/auth/auth-service';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Home from './components/Global/Home';
import Events from './components/Global/Events';
import Profile from './components/Global/Profile';
import AboutUs from './components/Global/AboutUs';
import ModalCard from './components/Partials/ModalCard';
import MainNav from './components/Partials/MainNav';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedInUser: null,
      hide: false
    };
    this.service = new AuthService();
  }

  toggleHeader = () => {
    const { hide } = this.state
    this.setState({
      ...this.state,
      hide: !hide
    })
  }

  fetchUser() {
    if (this.state.loggedInUser === null) {
      this.service.loggedin()
        .then(response => {
          this.setState({
            loggedInUser: response
          })
        })
        .catch(err => {
          this.setState({
            loggedInUser: false
          })
        })
    }
  }

  getUser = (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }

  logout = () => {
    console.log("cerrar sesión")
    this.service.logout()
      .then(() => {
        this.setState({
          loggedInUser: null
        });
      })
  }

  render() {
    this.fetchUser();
    return (
      <React.Fragment>
        {
          !this.state.hide ?
            <MainNav user={this.state.loggedInUser}></MainNav> :
            <div className='topHeaderApp'>
              <div >
                <img src="../img/logo.png" />
              </div>
            </div>
        }
        <Switch>
          <Route exact path='/' component={Home} />

          <Route exact path='/about-us' component={AboutUs} />

          <Route exact path='/signup' render={() =>
            this.state.loggedInUser ? <Redirect to={"/events"} /> :
              <Signup />} />

          <Route exact path='/login' render={() =>
            this.state.loggedInUser ? <Redirect to={"/events"} /> :
              <Login getUser={this.getUser} />} />

          <Route exact path='/events' render={() =>
            this.state.loggedInUser ? <Events user={this.state.loggedInUser} /> :
              <Redirect to={'/login'} />} />

          <Route exact path='/events/:genre' render={() =>
            this.state.loggedInUser ? <Events /> :
              <Redirect to={'/login'} />} />

          <Route exact path='/events/:genre/:artworkId' render={() =>
            this.state.loggedInUser ? <ModalCard /> :
              <Redirect to={'/login'} />} />

          <Route exact path='/profile' render={() =>
            this.state.loggedInUser ? <Profile getUser={this.getUser} logout={this.logout} toggleHeader={() => this.toggleHeader()} /> :
              <Redirect to={'/login'} />} />

        </Switch>
      </React.Fragment>
    );
  }
}

export default App;


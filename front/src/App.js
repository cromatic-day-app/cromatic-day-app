import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import AuthService from './components/auth/auth-service';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Home from './components/Home';
import Events from './components/Events';
import ArtworkDetail from './components/ArtworkDetail';
import Profile from './components/Profile';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedInUser: null
    };
    this.service = new AuthService();
  }

  getUser = (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }

  logout = () => {
    this.service.logout()
      .then(() => {
        this.setState({
          loggedInUser: null
        });
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

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path='/' component={Home} />

          <Route exact path='/signup' render={() =>
            this.state.loggedInUser ? <Redirect to={"/events"} /> :
              <Signup />} />

          <Route exact path='/login' render={() =>
            this.state.loggedInUser ? <Redirect to={"/events"} /> :
              <Login getUser={this.getUser} userInSession={this.state.loggedInUser} />}/>} />

          <Route exact path='/events' render={() =>
            this.state.loggedInUser ? <Events logout={this.logout} /> :
              <Redirect to={'/login'} />} />

          <Route exact path='/events/:genre' render={() =>
            this.state.loggedInUser ? <Events /> :
              <Redirect to={'/login'} />} />

          <Route exact path='/events/:genre/:artworkId' render={() =>
            this.state.loggedInUser ? <ArtworkDetail /> :
              <Redirect to={'/login'} />} />

          <Route exact path='/profile' render={() =>
            this.state.loggedInUser ? <Profile /> :
              <Redirect to={'/login'} />} />
          
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;


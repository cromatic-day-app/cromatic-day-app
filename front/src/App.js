import React from 'react';

import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import AuthService from './components/auth/auth-service';
import Signup from './components/auth/Signup';
import Navbar from './components/Navbar';
import Login from './components/auth/Login';
import Home from './components/Home';

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
    // console.log("logout")
    this.service.logout()
      .then(() => {
        this.setState({
          loggedInUser: null
        });
      })
  }

  fetchUser(){
    if( this.state.loggedInUser === null ){
      this.service.loggedin()
      .then(response =>{
        this.setState({
          loggedInUser:  response
        }) 
      })
      .catch( err =>{
        this.setState({
          loggedInUser:  false
        }) 
      })
    }
  }


  render() {
    //this.fetchUser()
    console.log(this.state.loggedInUser);
    if (this.state.loggedInUser) {
      return (
        <React.Fragment>
          <div className="App">
            <header className="App-header">
              <Navbar userInSession={this.state.loggedInUser} logout={() => this.logout()} />
              <h1>You are in!!!</h1>
            </header>
          </div>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        {/* <Redirect to="/login"></Redirect> */}

        <div className="App">
          <header className="App-header">
            <Switch>
              <Route exact path='/signup' render={() => <Signup getUser={(obj) => this.getUser(obj)} />} />
              <Route exact path='/login' render={() => <Login getUser={(obj) => this.getUser(obj)} />} />
            </Switch>
          </header>
        </div>
      </React.Fragment>
    );
  }


  // render() {
  //   this.fetchUser()

  //   if (this.state.loggedInUser) {
  //     return (
  //       <React.Fragment>
  //         {/* <Redirect to="/home"></Redirect> */}

  //         <div className="App">
  //           <header className="App-header">
  //             <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
  //             <h1>You are in!!!</h1>
  //           </header>
  //         </div>
  //       </React.Fragment>
  //     );
  //   } else {
  //     return (
  //       <React.Fragment>
  //         {/* <Redirect to="/login"></Redirect> */}

  //         <div className="App">
  //           <header className="App-header">
  //             <h1>NO ESTÁS LOGUEADO</h1>
  //             <Switch>
  //               <Route exact path='/signup' render={() => <Signup getUser={this.getUser} />} />
  //               <Route exact path='/login' render={() => <Login getUser={this.getUser} />} />
  //             </Switch>
  //           </header>
  //         </div>
  //       </React.Fragment>
  //     );
  //   }
  // }


}

export default App;

// this.fetchUser()
// console.log(this.state.loggedInUser, "login")
// if (this.state.loggedInUser) {
//   return (
//     <React.Fragment>
//       {/* <Redirect to="/"></Redirect> */}
//       <div className="App">
//         <header className="App-header">
//           <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
//         </header>
//       </div>
//     </React.Fragment>
//   );
// } else {
//   return (
//     <React.Fragment>
//       {/* <Redirect to="/login"></Redirect> */}
//       <div className="App">
//         <header className="App-header">
//           <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
//           <Switch>
//             <Route exact path='/signup' render={() => <Signup getUser={this.getUser} />} />
//             <Route exact path='/login' render={() => <Login getUser={this.getUser} />} />
//             <Route exact path='/home' component={Home}/>
//           </Switch>
//         </header>
//       </div>
//     </React.Fragment>
//   );
// }
// }
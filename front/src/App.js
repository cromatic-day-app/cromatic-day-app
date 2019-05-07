import React from 'react';
import './App.css';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import Signup from './components/auth/Signup';
import Navbar from './components/Navbar';
import Contents from './components/Content';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedInUser: null
    };
  }

  getTheUser = (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }

  fetchUser() {
    if (this.state.loggedInUser === null) {
      //utilizamos el método loggedin para cualquier momento que deseemos obtener la información del usuario quede guardada en el state de app
      return this.service.loggedin()
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
    
      );
    }
  }
}

export default App;


// return (
//   <nav className="nav-style">
//     <ul>
//       <li>Welcome, {this.state.loggedInUser.username}</li>
//       <li>
//         <Link to='/profile' style={{ textDecoration: 'none' }}>Profile</Link>
//       </li>
//     </ul>
//   </nav>
// )
// } else {
// return (
//   <div>
//     <nav className="nav-style">
//       <ul>
//         <li><Link to='/signup' style={{ textDecoration: 'none' }}>Signup</Link></li>
//       </ul>
//     </nav>
//   </div>
// )
// }
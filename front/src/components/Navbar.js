import React from 'react';
import { Link } from 'react-router-dom';
import AuthService from './auth/auth-service';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null
    };
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({...this.state, loggedInUser: nextProps["userInSession"]});
  }


  handleLogout = () => {
    this.props.logout()
  }

  render() {
  
    if (this.props.userInSession) {
      return (
        <nav className="nav-style">
          <ul>
            <li>Welcome, {this.props.userInSession.username}</li>
            <li>
              <Link to='/'>
                <button onClick={() => this.handleLogout()}>Logout</button>
              </Link>
            </li>
          </ul>
        </nav>
      )
    } else {
      return (
        <nav className="nav-style">
          <ul>
            <li><Link to='/signup'>Signup</Link></li>
            <li><Link to='/login'>Login</Link></li>
          </ul>
        </nav>
      )
    }
  }
}

export default Navbar;
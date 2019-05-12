import React from 'react';
import { Link } from 'react-router-dom';
import MainNav from '../Partials/MainNav';


class Profile extends React.Component {

  handleLogout = () => {
    this.props.logout()
  }

  render() {
    return (
      <div>
        <MainNav></MainNav>
        <Link to='/'>
          <button onClick={this.handleLogout}>Logout</button>
        </Link>
        <h1>Profile</h1>
        <h2>reservas</h2>
      </div>
    )
  }
}

export default Profile;
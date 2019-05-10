import React from 'react';
import { Link } from 'react-router-dom';

class Events extends React.Component {

  handleLogout = () => {
    this.props.logout()
  }

  render() {
    return (
      <div>
        <h1>LANDSCAPES from Events</h1>
        <Link to='/'>
          <button onClick={() => this.handleLogout()}>Logout</button>
        </Link>
      </div>
    )
  }
}

export default Events;
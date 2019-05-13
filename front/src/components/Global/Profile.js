import React from 'react';
import { Link } from 'react-router-dom';
import MainNav from '../Partials/MainNav';


class Profile extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.toggleHeader()
  }

  componentWillUnmount(){
    this.props.toggleHeader()
  }

  handleLogout = () => {
    this.props.logout()
  }

  render() {
    return (
      <div>
        <Link to='/'>
          <button onClick={() => this.handleLogout()}>Logout</button>
        </Link>
        <h1>Profile</h1>
        <h2>reservas</h2>
      </div>
    )
  }
}

export default Profile;
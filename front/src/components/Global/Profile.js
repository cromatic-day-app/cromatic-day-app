import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.toggleHeader()
  }

  componentWillUnmount() {
    this.props.toggleHeader()
  }

  render() {
    return (
      <div className="profile">
        <div className="box-container">
          <div className="back">
            <Link to="/events" className="back-link">
              <i class="fas fa-arrow-left arrow"></i>
              Back to the events
          </Link>
          </div>
          <div className="profile-box">
            <img className="user-img" src={this.props.userPhoto} />
            <h2 className="username">{this.props.username}</h2>
            <div className="books-box">
              <h2>COMING SOON...</h2>
              <div className="line"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;
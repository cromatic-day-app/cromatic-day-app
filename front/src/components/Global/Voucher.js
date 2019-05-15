import React from 'react';
import { Link } from 'react-router-dom';
import './Voucher.css';

class Voucher extends React.Component {
  constructor(props) {
    super(props);
  }
//   componentDidMount() {
//     this.props.toggleHeader()
//   }

//   componentWillUnmount() {
//     this.props.toggleHeader()
//   }

  render() {
    return (
      <div className="profile1">
        <div className="box-container1">
          <div className="back1">
            <Link to="/events" className="back-link1">
              <i class="fas fa-arrow-left arrow1"></i>
              Back to the events
          </Link>
          </div>
          <div className="profile-box1">
            <img className="user-img1" src={this.props.userPhoto} />
            <h2 className="username1">{this.props.username}</h2>
            <div className="books-box1">
              <h2>COMING SOON...</h2>
              <div className="line1"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Voucher;
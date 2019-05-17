import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import ArtService from "../art-service";
import AuthService from '../auth/auth-service';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deleted: false,
      booked: this.props.booked,
      vouchers: this.props.vouchers
    }
    this.ArtService = new ArtService();
    this.service = new AuthService();
  }

  deleteArtworks = (artworkId) => {
    this.props.removeItem();
    this.ArtService.deleteArtwork(artworkId)
      .then(deletedArtwork => {
        deletedArtwork = deletedArtwork.filter((artwork) => {
          return (artwork !== artworkId)
        })
        this.setState({
          ...this.state,
          booked: deletedArtwork
        })
      })
      .catch(error => console.log(error))
  }

  componentDidMount() {
    this.service.loggedin()
      .then(user => {
        this.setState({
          ...this.state,
          booked: user.booked,
          vouchers: user.vouchers
        })
      })
    this.props.toggleHeader();
  }

  componentWillUpdate() {
    this.service.loggedin()
      .then(user => {
        this.setState({
          ...this.state,
          booked: user.booked,
          vouchers: user.vouchers
        })
      })
  }

  componentWillUnmount() {
    this.props.toggleHeader();
  }

  render() {
    return (
      <div className="profile">
        <div className="box-container">
          <div className="back">
            <Link to="/events" className="back-link">
              <i className="fas fa-arrow-left arrow"></i>
              Back to the events
          </Link>
          </div>
          <div className="profile-box">
            <img className="user-img2" src={this.props.userPhoto} alt="img" />
            <h2 className="username">{this.props.username}</h2>
            <div className="booked-artworks">
              <div className="books-box">
                <h2>COMING SOON...</h2>
                <div className="line"></div>
                {
                  this.state.booked.map((artwork, idx) => {
                    return (
                      <div className="all-artworks" key={idx}>
                        <div className="each-artwork" key={idx}>
                          <div className="txt-artwork">
                            <h2>{artwork.title}</h2>
                            <p>{artwork.artistDisplayName}</p>
                          </div>
                          <div>
                            <button onClick={() => this.deleteArtworks(artwork._id)}>Delete</button>
                          </div>
                        </div>
                        <div className="line"></div>
                      </div>
                    )
                  })
                }
                {
                  this.state.vouchers.map((voucher, idx) => {
                    return (
                      <div className="all-artworks" key={idx}>
                        <div className="each-artwork" key={idx}>
                          <div className="txt-artwork">
                            <h2>{voucher.title}</h2>
                            <p>{voucher.creator}</p>
                          </div>
                          <div>
                            <button>Delete</button>
                          </div>
                        </div>
                        <div className="line"></div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

export default Profile;
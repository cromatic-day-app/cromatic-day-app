import React from "react";
import { Link } from 'react-router-dom';
import AuthService from '../auth/auth-service';
import "./MainNav.css";
import "bulma/css/bulma.css";

class MainNav extends React.Component {
  constructor(props) {
    super(props);
    this.service = new AuthService();
    this.state = {
      loggedInUser: null,
    };
  }

  render() {
    return (
      <React.Fragment>
        {
          (this.props.user) ?
            <nav className="nav-css">
              <div className='topHeader'>
                <div>
                  <Link to="/">
                    <img className="img-logo" src="../img/logo.png" alt="img" />
                  </Link>
                </div>
              </div>
              <div className='loggedInIcons'>
                <Link to='/profile' className="link-img">
                  <img className="user-img" src={this.props.userPhoto} alt="img"/>
                </Link>
                <i className="fas fa-shopping-cart cart" />
                {
                  (this.props.qty) > 0
                    ? <div className="qty-box">
                      <span className="qty">{this.props.qty}</span>
                    </div>
                    : null
                }
              </div>
              <div id="menu">
                <div id='nav' className="columns">
                  <Link className="column link" to="/about-us">About us</Link>
                  <Link className="column link" to="/events">Events</Link>
                  <Link className="column link" to="/voucher">Voucher</Link>
                  <Link className="column link" to="/contact">Contact</Link>
                </div>
              </div>
            </nav>
            :
            <div className='topHeader2'>
              <div>
                <Link to="/">
                  <img className="img-logo" src="../img/logo.png" alt="img" />
                </Link>
              </div>
            </div>
        }
      </React.Fragment>
    );
  }
}

export default MainNav;

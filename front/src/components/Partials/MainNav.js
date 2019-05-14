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
            <div>
              <div className='topHeader'>
                <div >
                  <img src="../img/logo.png" alt="img" />
                </div>
              </div>
              <div className='loggedInIcons'>
                <Link to='/profile' className="icons"><i className="fas fa-user-circle" /></Link>
                <i className="fas fa-shopping-cart icons" />
                {
                  (this.props.qty) > 0 ? <span>{this.props.qty}</span> : null
                }
              </div>
              <div id="menu">
                <div id='nav' className='columns'>
                  <Link className="column link" to="/about-us">About us</Link>
                  <Link className="column link" to="/events">Events</Link>
                  <Link className="column link" to="/voucher">Voucher</Link>
                  <Link className="column link" to="/contacts">Contacts</Link>
                </div>
              </div>
            </div>
            :
            <div className='topHeader2'>
              <div >
                <img src="../img/logo.png" alt="img"/>
              </div>
            </div>
        }
      </React.Fragment>
    );
  }
}

export default MainNav;

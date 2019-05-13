import React from "react";
import "./Logo.css";
import "bulma/css/bulma.css";


class Logo extends React.Component {
  render() {
    if (this.props.user) {
      return (
        <div>
        <div className='topHeader'>
          <div >
            <img src="../img/logo.png" />
          </div>
        </div>
          <div className='loggedInIcons'>
            <i className="fas fa-user-circle" />
            <i className="fas fa-shopping-cart" />
          </div>
          </div>
      );
    } else {
      return (
        <div className="test2">
          <img src="../img/logo.png" />
        </div>
      );
    }
  }
}

export default Logo;

// className="d-flex justify-content-center"

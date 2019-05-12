import React from "react";
import './Logo.css'

class Logo extends React.Component {
  render() {
    if (this.props.user) {
      return (
        <div className="test1">
          <p>ESTOY LOGUEADO</p>
          <img src="../img/logo.png"/>
          <i className="fas fa-user-circle" />
          <i className="fas fa-shopping-cart"></i>
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

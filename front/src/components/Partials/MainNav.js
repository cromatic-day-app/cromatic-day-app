import React from "react";
import Logo from "./Logo";
import Navigator from './Navigator';
import "./MainNav.css";
import "bulma/css/bulma.css";


class MainNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null
    };
  }

  render() {
    return (
      <div>
        <div>
          <Logo user={this.props.user} />
        </div>

        <div id='menu'>
          <Navigator />
        </div>
      
      </div>
    );
  }
}

export default MainNav;

import React from 'react'
import Logo from './Logo';
import Navigator from './Navigator';

class MainNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedInUser: null
    };
  }

  render() {
   return (
      <div className= "container">
        <Logo user={this.props.user}></Logo>
        <Navigator></Navigator>
      </div>
    )
  }
}

export default MainNav;
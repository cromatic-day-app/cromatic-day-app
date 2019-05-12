import React from 'react'
import Logo from './Logo';
import Navigator from './Navigator';

class MainNav extends React.Component {
  render() {
    return (
      <div>
        <h1>Main nav</h1>
        <Logo></Logo>
        <Navigator></Navigator>
      </div>
    )
  }
}

export default MainNav;
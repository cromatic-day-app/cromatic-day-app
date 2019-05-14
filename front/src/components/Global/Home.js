import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     loggedInUser: null,
  //   };
  // }

  render() {
    return (
      <React.Fragment>

        <h1>Home page</h1>
        <button><Link to='/login'>Login</Link></button>
        <button><Link to='/signup'>Signup</Link></button>

      </React.Fragment>
    )
  }
}

export default Home;
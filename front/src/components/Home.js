import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  handleLogout = () => {
    this.props.logout()
  }

  render() {
    if (this.props.userInSession)
    return (
      <React.Fragment>
        <h1>Home page</h1>
        <Link to='/'>
          <button onClick={() => this.handleLogout()}>Logout</button>
        </Link>
      </React.Fragment>
    )
  }
}

export default Home;
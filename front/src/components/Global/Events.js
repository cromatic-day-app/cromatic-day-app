import React from 'react';
import { Link } from 'react-router-dom';
import MainNav from '../Partials/MainNav';
import AllGenres from '../Partials/AllGenres';

class Events extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <MainNav user={this.props.user}></MainNav>
        <AllGenres></AllGenres>
        <Link to='/profile'>
          <button>Profile</button>
        </Link>
      </React.Fragment>
    )
  }
}

export default Events;
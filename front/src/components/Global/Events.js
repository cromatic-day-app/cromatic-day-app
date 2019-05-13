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
        <AllGenres></AllGenres>
      </React.Fragment>
    )
  }
}

export default Events;
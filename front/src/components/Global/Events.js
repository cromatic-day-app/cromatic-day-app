import React from 'react';
import AllGenres from '../Partials/AllGenres';

class Events extends React.Component {

  render() {
    return (
      <React.Fragment>
        <AllGenres addItem={this.props.addItem}></AllGenres>
      </React.Fragment>
    )
  }
}

export default Events;
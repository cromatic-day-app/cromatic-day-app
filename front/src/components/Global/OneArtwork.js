import React from 'react';
import Card from '../Partials/Card';
import MainNav from '../Partials/MainNav';


class OneArtwork extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <div>
        <MainNav></MainNav>
        <Card></Card>
      </div>
    )
  }
}

export default OneArtwork;
import React from 'react';
import Card from '../Partials/Card';
import MainNav from '../Partials/MainNav';


class OneArtwork extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <input
          type="file"
          onChange={(e) => this.handleFileUpload(e)}
        />
        
        <Card></Card>
      </div>
    )
  }
}

export default OneArtwork;
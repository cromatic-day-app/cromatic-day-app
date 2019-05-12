import React from 'react';
import ArtService from '../art-service';

class AllArtworks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allArtworks: [],
    }
    this.ArtService = new ArtService();
  }

  // componentDidMount() {
  //   console.log(this.props)
  //   this.ArtService.allArtworks(this.props.match.params.genre)
  //     .then(artworks => {
  //       console.log(artworks)
  //       this.setState({
  //         ...this.state,
  //         allArtworks: artworks
  //       })
  //     })
  // }

  render() {
    return (
      <div>
        <h1>HOLA!!!</h1>
      </div>
    )
  }
}

export default AllArtworks;
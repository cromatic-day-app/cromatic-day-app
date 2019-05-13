import React from 'react';
import ArtService from '../art-service';

class AllArtworks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allArtworks: []
    }
    this.ArtService = new ArtService();
  }

  componentWillReceiveProps(nextProps) {
    this.ArtService.allArtworks(nextProps.javi)
      .then(artworks => {
        console.log(artworks);
        this.setState({
          ...this.state,
          allArtworks: artworks
        })
      })
  }

  componentDidMount() {
    this.ArtService.allArtworks(this.props.javi)
      .then(artworks => {
        this.setState({
          ...this.state,
          allArtworks: artworks
        })
      })

  }

  render() {
    return (
      <div>
        {
          this.state.allArtworks.map((artwork, idx) => {
            return (
              <ul key={idx}>
                <li>{artwork.title}</li>
                <li><img src={artwork.primaryImageSmall} alt=""/></li>
              </ul>
            )
          })
        }
        <h1>Soy el componente artWorks {this.props.javi}</h1>
      </div>
    )
  }
}

export default AllArtworks;
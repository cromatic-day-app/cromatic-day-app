import React from 'react';
import { Link } from 'react-router-dom';
import ArtService from '../art-service';
import AllArtworks from './AllArtworks';

class AllGenres extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allGenres: [],
      "display": false
    }
    this.ArtService = new ArtService();
  }

  findOjectBykey = (array, key, value) => {
    for (var i = 0; i < array.length; i++) {
      if (array[i][key] === value) {
        return array[i];
      }
    }
    return null;
  }

  onlyOneGenre = (genresArray) => {
    var tempArray = [];
    genresArray.forEach(element => {

      if (tempArray.length === 0) {
        tempArray.push(element)

      }
      let obj = this.findOjectBykey(tempArray, 'genre', element.genre);

      if (obj == null) {
        tempArray.push(element);
      }
    });
    return tempArray;
  }

  showGenreArtworks = () => {
    if (this.state.display === "none") {
      this.setState({
        "display": "block"
      })
    } else {
      this.setState({
        "display": "none"
      })
    }
  }

  componentDidMount() {
    this.ArtService.allGenres()
      .then(artworks => {
        this.setState({
          ...this.state,
          allGenres: artworks
        })
      })
  }

  render() {
    return (
      <div>
        {
          this.onlyOneGenre(this.state.allGenres).map((picture, idx) => {
            return (
              <div key={idx}>
                <button onClick={this.showGenreArtworks}><Link to={`/events/${picture.genre}`}>{picture.genre}</Link></button>
              </div>
            )
          })
        }
        <div style={{ display: this.state.display }}>
          <AllArtworks></AllArtworks>
        </div>
      </div>
    )
  }
}

export default AllGenres;
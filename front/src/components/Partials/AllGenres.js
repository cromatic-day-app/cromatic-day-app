import React from 'react';
import { Link } from 'react-router-dom';
import ArtService from '../art-service';
import AllArtworks from './AllArtworks';

class AllGenres extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allGenres: [],
      genreSelected: undefined
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

  showGenreArtworks = (pictureGenre) => {
    
    if (this.state.display === "none") {
      this.setState({
        genreSelected: pictureGenre

      })
    } else {
      this.setState({
        genreSelected: pictureGenre
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
    console.log(this.state);
    
    return (
      <div>
        {
          
          this.onlyOneGenre(this.state.allGenres).map((picture, idx) => {
            return (
              <div key={idx}>
                <button onClick={()=>this.showGenreArtworks(picture.genre)}><Link to={`/events/${picture.genre}`}>{picture.genre}</Link></button>
              </div>
            )
          })
        }
        { this.state.genreSelected !== undefined &&
          <AllArtworks selectedGenre={this.state.genreSelected}></AllArtworks>
        }
      
      </div>
    )
  }
}

export default AllGenres;

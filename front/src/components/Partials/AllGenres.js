import React from "react";
import { Link } from "react-router-dom";
import ArtService from "../art-service";
import AllArtworks from "./AllArtworks";
import "./AllGenres.css";
import "bulma/css/bulma.css";

class AllGenres extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allGenres: [],
      genreSelected: undefined
    };
    this.ArtService = new ArtService();
  }

  findOjectBykey = (array, key, value) => {
    for (var i = 0; i < array.length; i++) {
      if (array[i][key] === value) {
        return array[i];
      }
    }
    return null;
  };

  onlyOneGenre = genresArray => {
    var tempArray = [];
    genresArray.forEach(element => {
      if (tempArray.length === 0) {
        tempArray.push(element);
      }
      let obj = this.findOjectBykey(tempArray, "genre", element.genre);

      if (obj == null) {
        tempArray.push(element);
      }
    });
    return tempArray;
  };

  showGenreArtworks = pictureGenre => {
    if (this.state.display === "none") {
      this.setState({
        genreSelected: pictureGenre
      });
    } else {
      this.setState({
        genreSelected: pictureGenre
      });
    }
  };

  componentDidMount() {
    this.ArtService.allGenres().then(artworks => {
      this.setState({
        ...this.state,
        allGenres: artworks
      });
    });
  }

  render() {
    return (
      <div>
        <div className="collections">
        <div className="btncontent">
          {this.onlyOneGenre(this.state.allGenres).map((picture, idx) => {
            return (
              // <div  style={{backgroundColor:'red'}}>
                <a  key={idx} to={`/events/${picture.genre}`}>
                  {" "}
                  <img
                    className=""
                    src ={`/img/${picture.genre}.png`}
                    alt="button"
                    onClick={() => this.showGenreArtworks(picture.genre)}
                  />
                </a>
              // </div>
            );
          })}
          </div>
        </div>
        {this.state.genreSelected !== undefined && (
          <AllArtworks
            selectedGenre={this.state.genreSelected}
            addItem={this.props.addItem}
          />
        )}
      </div>
    );
  }
}

export default AllGenres;

import React from "react";
import ArtService from "../art-service";
import "bulma/css/bulma.css";
import "./AllArtworks.css";
import { Link } from 'react-router-dom';
import ModalCard from './ModalCard';

class AllArtworks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allArtworks: [],
      isOpen: false
    };
    this.ArtService = new ArtService();
  }

  handleShowDialog = () => {
    this.setState({
      isOpen: true
    });
    console.log('cliked');
  }

  componentWillReceiveProps(nextProps) {
    this.ArtService.allArtworks(nextProps.selectedGenre)
      .then(artworks => {
        this.setState({
          ...this.state,
          allArtworks: artworks
        })
      })
  }

  componentDidMount() {
    this.ArtService.allArtworks(this.props.selectedGenre)
      .then(artworks => {
        this.setState({
          ...this.state,
          allArtworks: artworks
        })
      })
  }

  render() {
    return (
      <div id="cuadros" className="columns is-multiline is-8">
        {this.state.allArtworks.map((artwork, idx) => {
          return (
            <div class="column is-one-third">
              <div class="card" key={idx}>
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img
                      src={artwork.primaryImageSmall}
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                     
                    <div class="media-content">
                      <p class="title is-4">{artwork.title}</p>
                    </div>
                  </div>
                  <div class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. 
                    {/* <a>@bulmaio</a>.<a href="#">#css</a> <a href="#">#responsive</a> */}
                    <br />
                    {/* <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> */}
                  </div>
                </div>
              </div>

            </div>
          );
        })}
      </div>
    );
  }
}

export default AllArtworks;

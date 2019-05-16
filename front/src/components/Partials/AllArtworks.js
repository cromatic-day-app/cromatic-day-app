import React from "react";
import ArtService from "../art-service";
import "bulma/css/bulma.css";
import "./AllArtworks.css";
import ModalCard from './ModalCard';
import moment from "moment";

class AllArtworks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allArtworks: [],
      booked: []
    };
    this.ArtService = new ArtService();
  }

  showModal = (modalId) => {
    const modal = document.getElementById(modalId);
    modal.className = "modal is-active";
  }

  closeModal = (modalId) => {
    const modal = document.getElementById(modalId);
    modal.className = "modal";
  }

  joinArtworks = (artworkId) => {
    this.props.addItem();
    this.ArtService.userArtworks(artworkId)
      .then(artwork => {
        this.setState({
          ...this.state,
          booked: artwork
        })
      })
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
      // this.joinArtworks(artworkId);
  }

  render() {
    return (
      <React.Fragment>
      <div id="cuadros" className="columns is-multiline is-5">
        {
          this.state.allArtworks.map((artwork, idx) => {
            return (
              <div className="column is-one-third" key={idx}>
                <div className="card" key={idx}>
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={artwork.primaryImageSmall} alt="img"/>
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content artwork-title">
                        <p className="title is-4">{artwork.title}</p>
                      </div>
                    </div>
                    <div className="content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus nec iaculis mauris.
                    {/* <a>@bulmaio</a>.<a href="#">#css</a> <a href="#">#responsive</a> */}
                      <br />
                      {/* <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> */}
                    </div>
                  </div>
                  <div className="spacebtn">
                    <button className="btn" onClick={() => this.showModal("m" + idx)}>More details</button>
                    <button className="btn" onClick={() => this.joinArtworks(artwork._id)}>Add to cart</button>
                  </div>
                </div>
                <ModalCard artwork={artwork} idx={idx} date={moment(artwork.date).format("dddd MMM Do YYYY")}/>
              </div>
            );
          })
        }
      </div>
      </React.Fragment>
    );
  }
}

export default AllArtworks;


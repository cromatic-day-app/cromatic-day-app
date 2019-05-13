import React from 'react';
import ArtService from '../art-service';
import { Link } from 'react-router-dom';
import ModalCard from './ModalCard';

class AllArtworks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allArtworks: [],
      isOpen: false
    }
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
        // console.log(artworks);
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
      <div>
        {
          this.state.allArtworks.map((picture, idx) => {
            return (
              <ul key={idx}>
                <li>{picture.title}</li>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalScrollable">
                  <li>
                    <Link to={`/events/${picture.genre}/${picture._id}`}>
                      <img
                        onClick={() => this.handleShowDialog()}
                        src={picture.primaryImageSmall} alt="" />
                    </Link>
                  </li>
                </button>
                <div className="modal fade" data-show="true" id="exampleModalScrollable" tabIndex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-scrollable" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalScrollableTitle">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        ...
              </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                      </div>
                    </div>
                  </div>
                </div>
              </ul>
            )
          })
        }
        {/* {
          this.state.isOpen && <ModalCard />
        } */}
      </div>
    )
  }
}

export default AllArtworks;


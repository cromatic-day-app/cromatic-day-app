import React from 'react';
import { Link } from 'react-router-dom';
import ArtService from './art-service';


class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allGenres: [],
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


  showGenres = (test) => {
    var tempArray = [];
    test.forEach(element => {
    
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

  handleLogout = () => {
    this.props.logout()
  }

  componentDidMount() {
    this.ArtService.allGenres()
      .then(artworks => {
        // console.log(artworks);
        this.setState({
          ...this.state,
          allGenres: artworks
        })
      })
  }


  render() {

    return (

      <React.Fragment>
        <h1>LANDSCAPES from Events</h1>
        <Link to='/'>
          <button onClick={() => this.handleLogout()}>Logout</button>
        </Link>
        {
          this.showGenres(this.state.allGenres).map((pict, idx) => {
            return (
              <h2 key={idx}>{pict.genre}</h2>
            )
          })
        }
      </React.Fragment>

    )
  }
}

export default Events;
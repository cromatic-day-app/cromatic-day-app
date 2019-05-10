import React from 'react';
import { Link } from 'react-router-dom';
import ArtService from './art-service';


class Events extends React.Component {
constructor(props){
  super(props);
  this.state= {
    allGenres: [],

  }
this.ArtService= new ArtService()

}

componentDidMount(){
this.ArtService.allGenres()
.then(artworks => {
  // console.log(artworks);
  
  this.setState({
    ...this.state,
    allGenres: artworks
  })
  // console.log(this.state)
})

}
  

handleLogout = () => {
    this.props.logout()
  }

  render() {
    //  console.log(this.state.allGenres)
    return (
      
      <React.Fragment>
        <h1>LANDSCAPES from Events</h1>
        <Link to='/'>
          <button onClick={() => this.handleLogout()}>Logout</button>
        </Link>
        {
          this.state.allGenres.map((pict, idx)=>{
            return (
              <h2>{pict.genre}</h2>
            )
          })
        }
      </React.Fragment>

    )
  }
}

export default Events;
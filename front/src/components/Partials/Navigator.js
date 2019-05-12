import React from 'react'
import { Link } from 'react-router-dom';
import './Navigator.css'

class Navigator extends React.Component {
  render() {
    return (
      <div className= "box-navigator">
        <Link to= "/about-us">About us</Link>
        <Link to= "/events">Events</Link>
        <Link to= "/voucher">Voucher</Link>
        <Link to= "/contacts">Contacts</Link>
      </div>

    )
  }
}

export default Navigator;
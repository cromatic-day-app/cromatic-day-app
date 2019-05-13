import React from 'react'
import { Link } from 'react-router-dom';
import './Navigator.css'

class Navigator extends React.Component {
  render() {
    return (
      <div className='columns'>
        <Link className="column link" to= "/about-us">About us</Link>
        <Link className="column link" to= "/events">Events</Link>
        <Link className="column link" to= "/voucher">Voucher</Link>
        <Link className="column link" to= "/contacts">Contacts</Link>
      </div>

    )
  }
}

export default Navigator;
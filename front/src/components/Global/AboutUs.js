import React from 'react'
import MainNav from '../Partials/MainNav';
import { Link } from 'react-router-dom';


class AboutUs extends React.Component {
  render() {
    return (
      <div>
        <MainNav></MainNav>
        <h1>About Us</h1>
        <p>lorem ipsur since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktm</p>
        <img src= "/img/about.jpg"/>

      </div>
    )
  }
}

export default AboutUs;
import React from 'react'
import AuthService from '../auth/auth-service';

class AboutUs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedInUser: null
    };
    this.service = new AuthService();
    this.getUser();
    this.fetchUser();
  }

  fetchUser() {
    if (this.state.loggedInUser === null) {
      this.service.loggedin()
        .then(response => {
          console.log(response)
          this.setState({
            loggedInUser: response
          })
        })
        .catch(err => {
          this.setState({
            loggedInUser: false
          })
        })
    }
  }

  getUser = (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }

  render() {
    return (
      <div>
        <h1>About Us</h1>
        <p>lorem ipsur since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktm</p>
        <img src="/img/about.jpg" alt="img"/>

      </div>
    )
  }
}

export default AboutUs;
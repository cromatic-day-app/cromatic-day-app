import React from "react";
import AuthService from "../auth/auth-service";
import "./AboutUs.css";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null
    };
    this.service = new AuthService();
    this.getUser();
    this.fetchUser();
  }

  fetchUser() {
    if (this.state.loggedInUser === null) {
      this.service
        .loggedin()
        .then(response => {
          console.log(response);
          this.setState({
            loggedInUser: response
          });
        })
        .catch(err => {
          this.setState({
            loggedInUser: false
          });
        });
    }
  }

  getUser = userObj => {
    this.setState({
      loggedInUser: userObj
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="space" />
        <div className="backphotos">
          <img src="/img/paint1.png" alt="img1" />
        </div>

        <div className="bigbox">
          <div className="AboutTitle">
            <img src="/img/abouttitle.png" />
          </div>
          <div className="text">
            <p>
              lorem ipsur since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktm
            </p>
          </div>
        </div>

        <div className="backphotos">
          <img src="/img/paint2.png" alt="img2" />
        </div>

        <div className="generaldiv">
          <div className="iconspaces columns is-multiline ">
            <p className="iconpaint columns">
              <i className="fas fa-paint-roller column is-one-third " />
              <i className="fas fa-paint-brush column is-one-third" />
              <i class="fas fa-palette column is-one-third" />
            </p>

            <h3 className="titles column is-one-third">
              Painting with friends
            </h3>

            <h3 className="titles column is-one-third">Certificate teachers</h3>
            <h3 className="titles column is-one-third">Certificate teachers</h3>

            <p className="textsection column is-one-third">
              Lorem ipsur since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not
            </p>

            <p className="textsection column is-one-third">
              Lorem ipsur since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not
            </p>

            <p className="textsection column is-one-third">
              Lorem ipsur since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not
            </p>

          </div>
        </div>

        <div className="backphotos">
          <img src="/img/paint3.png" alt="img3" />
        </div>
      </React.Fragment>
    );
  }
}

export default AboutUs;

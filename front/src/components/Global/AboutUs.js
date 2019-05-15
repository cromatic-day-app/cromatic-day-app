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
        <p className="space" />
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          {/* <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            />
            <li data-target="#carouselExampleIndicators" data-slide-to="1" />
            <li data-target="#carouselExampleIndicators" data-slide-to="2" />
          </ol> */}
          <div className="carousel-inner">
            <div className="carousel-item active" data-interval="10000">
              <img
                className="d-block w-100 h-100"
                src="/img/paint1.png"
                alt="First slide"
              />
            </div>
            <div className="carousel-item" data-interval="10000">
              <img
                className="d-block w-100 h-100"
                src="/img/paint2.png"
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100 h-100"
                src="/img/paint3.png"
                alt="Third slide"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
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

        <div className="generaldiv">
          <div className="iconspaces columns is-multiline is-8">
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
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AboutUs;
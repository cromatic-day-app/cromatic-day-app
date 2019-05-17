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
            <img src="/img/abouttitle.png" alt="img"/>
          </div>
          <div className="text">
            <p>We are a group painting event organization company.We are based on a new concept of leisure for adult audiences. We detected that there is a lack of fun activities related to art and that is where our concept comes from.
You can reserve a work that you like from different genres, buy it and be able to go paint with whoever you want in a studio with teachers. All this enjoying a wine or a drink to have a great time!
</p>
          </div>
        </div>

        <div className="backphotos">
          <img src="/img/paint2.png" alt="img" />
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
            <h3 className="titles column is-one-third">Materials</h3>

            <p className="textsection column is-one-third">
              
Gather your friends for the occasion that you want and enjoy a spectacular evening
            </p>

            <p className="textsection column is-one-third">
            Certified teachers that will help you learn all the pictorial techniques you need to get your works of art

            </p>

            <p className="textsection column is-one-third">
            We take care of everything!. The materials you need are included per person. Each one will have your own easel, brushes, palette, paintings ...
We make it simple for you.</p>

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

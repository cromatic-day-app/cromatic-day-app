import React from "react";
import "./Contact.css";

class Contact extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <React.Fragment>
        <div className="generaldiv1">
          <div className="iconspaces1 columns is-multiline ">
            <p className="iconpaint1 columns">
              <i className="fas fa-map-marker-alt is-one-third" />
              <i className="far fa-calendar-check is-one-third" />
              <i className="fas fa-phone is-one-third" />
            </p>

            <h3 className="titles1 column is-one-third">Address</h3>

            <h3 className="titles1 column is-one-third">Schedule</h3>
            <h3 className="titles1 column is-one-third">Phone</h3>

            <p className="textsection1 column is-one-third">
              Via peplocanto nº3/D <br></br>Calabria (CL) Italy 75100{" "}
              <br></br>
              <p>googlemaps</p>
            </p>

            <p className="textsection1 column is-one-third">
              Monday-Sunday<br></br>
              9:00 AM to 22:00 PM
            </p>

            <p className="textsection1 column is-one-third">
            phone/281 876 899
            </p>
          </div>
        </div>

        <div className="map">
          {/* <h1>map</h1> */}
          <img src= "/img/maptest.png"></img>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;


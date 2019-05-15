import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

class Home extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     loggedInUser: null,
  //   };
  // }

  componentDidMount() {
    document.querySelector(".rectangle").onmouseover = function() {
      var that = this;

      that.className = "rectangle hover";

      document.querySelector(".home section").onmouseout = function() {
        that.className = "rectangle";
      };
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="home">
          <div className="halfHome">
            <section style={{marginRight:"100px"}}>
              <div className="cube">
                <img src="/img/bighome1.png"/>
              </div>
              <div className="boxbtn">
                <Link to="/signup">SING UP</Link>
                <Link to="/login">LOGIN</Link>
              </div>
            </section>
            <div className="rectangle" />
          </div>
          <div className="halfHome">
            <div className="cube2">
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;

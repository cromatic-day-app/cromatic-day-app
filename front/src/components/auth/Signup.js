import React from "react";
import AuthService from "./auth-service";
import { Link, Redirect } from "react-router-dom";
import "../../Signup.css";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      saved: false
    };
    this.service = new AuthService();
  }

  handleFormSubmit = e => {
    e.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.service
      .signup(username, password)
      .then(() => {
        this.setState({
          username: "",
          password: "",
          saved: true
        });
        // this.props.getUser(response.user)
      })
      .catch(error => {
        this.setState({
          username: username,
          password: password,
          error: true
        });
      });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    if (this.state.saved) return <Redirect to={"/login"} />;
    return (
      <div className="formbg">
        <div className="boxform">
          <div className="formbox">
            <form onSubmit={e => this.handleFormSubmit(e)}>
              <div className="inputsizes">
                <h3 className="bigtitle">
                  Welcome!, create your account next:
                </h3>

                <label className="label">Username</label>
                <input className="input" type="text" placeholder="Username" />

                <label className="label">Email</label>
                <input
                  className="input"
                  type="email"
                  placeholder="e.g. alexsmith@gmail.com"
                />

                <label className="label">Password</label>
                <input className="input" type="password" placeholder="******" />

                <label className="label">Confirm your password</label>
                <input className="input" type="password" placeholder="******" />
                {/* <p>{this.state.error.length > 0 ? this.state.error : null}</p> */}

                <input className="btn" type="submit" value="Sign up" />
              </div>
            </form>
            <div className="linklogin">
              <p>Do you already have an account?</p>
              <Link to="/login">Login</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;

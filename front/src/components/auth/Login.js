import React from 'react';
import AuthService from './auth-service';
import { Link, Redirect } from "react-router-dom";
import "./Login.css";



class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      logged: false,
      error: ""
    };
    this.service = new AuthService();
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.service.login(username, password)
      .then(response => {
        this.setState({
          username: username,
          password: password,
          logged: true,
        }, () => this.props.getUser(response));
      })
      .catch(error => {
        this.setState({
          username: username,
          password: password,
          error: error.response.data.message
        });
      })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="formbg1">
        <div className="boxform1">
          <div className="formbox1">
            <form onSubmit={e => this.handleFormSubmit(e)}>
              <div className="inputsizes1">
                <h3 className="bigtitle1">Please, login to our site</h3>

                <label className="label">Username</label>
                <input
                  className="input"
                  name="username"
                  type="text"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={e => this.handleChange(e)}
                />

                <label className="label">Password</label>
                <input
                  className="input"
                  name="password"
                  type="password"
                  placeholder="******"
                  value={this.state.password}
                  onChange={e => this.handleChange(e)}
                />

                <p>{this.state.error.length > 0 ? this.state.error : null}</p>

                <input className="btn1" type="submit" value="Login" />

                <div className="linklogin1">
                  <p>Don´t you have an account?</p>
                  <Link to="/signup">Sign up</Link>
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>



    )
  }
}

export default Login;
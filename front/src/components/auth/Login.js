import React from 'react';
import AuthService from './auth-service';

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
        },() => this.props.getUser(response));
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
    // if(this.state.logged) return <Redirect to={"/home"}/>
    return (
      <div>
        <h3>Please, login to our site</h3>
        <form onSubmit={(e) => this.handleFormSubmit(e)}>
          <fieldset>
            <label>Username:</label>
            <input type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />
          </fieldset>

          <fieldset>
            <label>Password:</label>
            <input type="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)} />
          </fieldset>

          <input type="submit" value="Login" />
        </form>

        <p>{this.state.error.length > 0 ? this.state.error : null}</p>
      </div>
    )
  }
}

export default Login;
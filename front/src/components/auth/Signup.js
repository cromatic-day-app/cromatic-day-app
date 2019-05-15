import React from "react";
import AuthService from "./auth-service";
import { Link, Redirect } from "react-router-dom";
import "../../Signup.css";
import Avatar from "react-avatar-edit";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      passwordConfirm: "",
      email: "",
      userPhoto: "",
      preview: "",
      error: "",
      saved: false
    };
    this.service = new AuthService();
  }

  onClose = () => {
    this.setState({ userPhoto: null });
  };

  onCrop = preview => {
    this.setState({ preview });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const { username, password, passwordConfirm, email, preview } = this.state;

    this.service
      .signup(username, password, passwordConfirm, email, preview)
      .then(() => {
        this.setState({
          username: "",
          password: "",
          passwordConfirm: "",
          email: "",
          userPhoto: "",
          saved: true
        });
        // this.props.getUser(response.user)
      })
      .catch(error => {
        this.setState({
          username: username,
          password: password,
          passwordConfirm: passwordConfirm,
          email: email,
          error: error.response.data.message
        });
      });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleFileUpload = e => {
    // console.log("The file to be uploaded is: ", e.target.files[0]);
    const uploadData = new FormData();

    uploadData.append("userPhoto", e.target.files[0]);
    this.service
      .handleUpload(uploadData)
      .then(response => {
        // console.log('response is: ', response);
        this.setState({ userPhoto: response.secure_url });
      })
      .catch(err => {
        console.log("Error while uploading the file: ", err);
      });
  };

  render() {
    if (this.state.saved) return <Redirect to={"/login"} />;
    return (
      <div className="formbg">
        <div className="boxform">
          <div className="formbox">
            <form onSubmit={e => this.handleFormSubmit(e)}>
              <div className="photobox">
                <div className="avatar">
                  <Avatar
                    width={150}
                    height={150}
                    onCrop={preview => this.onCrop(preview)}
                    onClose={preview => this.onClose(preview)}
                  />
                </div>
                <div className="inputsizes">
                  <h3 className="bigtitle">
                    Welcome!, create your account next:
                  </h3>

                  <label className="label">Username</label>
                  <input
                    className="input"
                    name="username"
                    type="text"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={e => this.handleChange(e)}
                  />

                  <label className="label">Email</label>
                  <input
                    className="input"
                    name="email"
                    type="email"
                    placeholder="e.g. alexsmith@gmail.com"
                    value={this.state.email}
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

                  <label className="label">Confirm your password</label>
                  <input
                    className="input"
                    name="passwordConfirm"
                    type="password"
                    placeholder="******"
                    value={this.state.passwordConfirm}
                    onChange={e => this.handleChange(e)}
                  />

                  <p>{this.state.error.length > 0 ? this.state.error : null}</p>

                  <input className="btn" type="submit" value="Sign up" />

                  <div className="linklogin">
                    <p>Do you already have an account?</p>
                    <Link to="/login">Login</Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;

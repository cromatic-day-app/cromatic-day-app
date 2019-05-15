import React from 'react';
import AuthService from './auth-service';
import { Redirect } from 'react-router-dom';
import Avatar from 'react-avatar-edit';

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
    this.setState({ userPhoto: null })
  }

  onCrop = (preview) => {
    this.setState({ preview })
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { username, password, passwordConfirm, email, preview } = this.state;

    this.service.signup(username, password, passwordConfirm, email, preview)
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
      })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleFileUpload = (e) => {
    // console.log("The file to be uploaded is: ", e.target.files[0]);
    const uploadData = new FormData();

    uploadData.append("userPhoto", e.target.files[0]);
    this.service.handleUpload(uploadData)
      .then(response => {
        // console.log('response is: ', response);
        this.setState({ userPhoto: response.secure_url });
      })
      .catch(err => {
        console.log("Error while uploading the file: ", err);
      });
  }

  render() {
    if (this.state.saved) return <Redirect to={"/login"} />
    return (
      <div>
        <h3>Welcome!, create your account next:</h3>

        <form onSubmit={(e) => this.handleFormSubmit(e)}>
          <fieldset>
            <label>Username:</label>
            <input type="text" name="username" value={this.state.username} onChange={(e) => this.handleChange(e)} />
          </fieldset>

          <fieldset>
            <label>Password:</label>
            <input type="password" name="password" value={this.state.password} onChange={(e) => this.handleChange(e)} />
          </fieldset>

          <fieldset>
            <label>Confirm you password:</label>
            <input type="password" name="passwordConfirm" value={this.state.passwordConfirm} onChange={(e) => this.handleChange(e)} />
          </fieldset>

          <fieldset>
            <label>Email:</label>
            <input type="email" name="email" value={this.state.email} onChange={(e) => this.handleChange(e)} />
          </fieldset>

          <Avatar
            width={300}
            height={300}
            onCrop={(preview) => this.onCrop(preview)}
            onClose={(preview) => this.onClose(preview)}
          // src={this.state.userPhoto}
          />

          {/* <input
            type="file"
            onChange={(e) => this.handleFileUpload(e)} /> */}

          <input type="submit" value="Sign up" />
        </form>

        <p>{this.state.error.length > 0 ? this.state.error : null}</p>
      </div>
    )
  }
}

export default Signup;

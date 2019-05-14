import React from 'react';
import AuthService from './auth-service';
import { Redirect } from 'react-router-dom';
import Avatar from 'react-avatar-edit'

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      userPhoto: "",
      saved: false,
      // src: ""
    };
    this.service = new AuthService();
    // this.onCrop();
    // this.onClose();
  }

  // onClose = () => {
  //   this.setState({ userPhoto: null })
  // }

  // onCrop = (userPhoto) => {
  //   this.setState({ userPhoto })
  // }

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
    const { username, password, userPhoto } = this.state;

    this.service.signup(username, password, userPhoto)
      .then(() => {
        this.setState({
          username: "",
          password: "",
          userPhoto: "",
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
      })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleFileUpload = (e) => {
    console.log("The file to be uploaded is: ", e.target.files[0]);
    const uploadData = new FormData();
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new thing in '/api/things/create' POST route
    uploadData.append("userPhoto", e.target.files[0]);
    this.service.handleUpload(uploadData)
      .then(response => {
        console.log('response is: ', response);
        // after the console.log we can see that response carries 'secure_url' which we can use to update the state
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

          {/* <Avatar
            width={390}
            height={295}
            onCrop={() => this.onCrop()}
            onClose={() => this.onClose()}
            src={this.state.userPhoto}
          /> */}

          <input
            type="file"
            onChange={(e) => this.handleFileUpload(e)} />

          <input type="submit" value="Sign up" />
        </form>

        <h1>{this.state.error ? 'Error' : ''}</h1>
      </div>
    )
  }
}

export default Signup;

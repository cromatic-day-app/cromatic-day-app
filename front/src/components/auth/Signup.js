import React from "react";
import AuthService from "./auth-service";
import { Link, Redirect } from "react-router-dom";
import "../../Signup.css";
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
      });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

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
      <div className="formbg">
        <div className="boxform">
          <div className="formbox">
            <form onSubmit={e => this.handleFormSubmit(e)}>
              <div className="inputsizes">
                <h3 className="bigtitle">
                  Welcome!, create your account next:
                </h3>
                 <Avatar
                  width={300}
                  height={300}
                  onCrop={(preview) => this.onCrop(preview)}
                  onClose={(preview) => this.onClose(preview)}
                  />
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
                  
                <p>{this.state.error.length > 0 ? this.state.error : null}</p>

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

import React from "react";
import ArtService from "../art-service";
import AuthService from "../auth/auth-service";
import ModalVoucher from "../Partials/ModalVoucher";
import "./Voucher.css";


class Voucher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vouchers: [],
      title: "",
      receiver: "",
      creator: "",
      message: "",
      userPhoto: "",
      error: "",
      created: false,
      modalId: "voucherId"
    };
    this.ArtService = new ArtService();
    this.service = new AuthService();
  }

  showModal = modalId => {
    const modal = document.getElementById(modalId);
    modal.className = "modal is-active";
  };

  closeModal = modalId => {
    const modal = document.getElementById(modalId);
    modal.className = "modal";
  };

  handleFormSubmit = event => {
    event.preventDefault();

    const { title, receiver, creator, message, userPhoto } = this.state;

    this.ArtService.newVoucher(title, receiver, creator, message, userPhoto)
      .then(data => {
        // console.log(newVoucher)
        this.setState({
          vouchers: data.vouchers[data.vouchers.length - 1],
          title: title,
          receiver: receiver,
          creator: creator,
          message: message,
          userPhoto: "",
          error: "",
          created: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFileUpload = e => {
    const uploadData = new FormData();

    uploadData.append("userPhoto", e.target.files[0]);
    this.service
      .handleUpload(uploadData)
      .then(response => {
        this.setState({
          userPhoto: response.secure_url
        });
      })
      .catch(err => {
        console.log("Error while uploading the file: ", err);
      });
  };

  render() {
    return (
      <React.Fragment>

        <div className="boxform2">
          <div className="formbox2">
            <form className="inputsizes2" onSubmit={this.handleFormSubmit}>
              <h1 className="titlegift">Create your gift card!</h1>
              <div className="field">
                <label className="label">Title</label>
                <div className="control">
                  <input
                    className="input"
                    name="title"
                    type="text"
                    value={this.state.title}
                    placeholder="Put your title"
                    min="0"
                    onChange={e => this.handleChange(e)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">To:</label>
                <div className="control has-icons-left has-icons-right">
                  <input
                    className="input"
                    name="receiver"
                    type="text"
                    value={this.state.receiver}
                    placeholder="To"
                    min="0"
                    onChange={e => this.handleChange(e)}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-user" />
                  </span>
                  <span className="icon is-small is-right">
                    <i className="fas fa-check" />
                  </span>
                </div>
              </div>
              <div className="field">
                <label className="label">From:</label>
                <div className="control has-icons-left has-icons-right">
                  <input
                    className="input"
                    name="creator"
                    type="text"
                    placeholder="From"
                    value={this.state.creator}
                    onChange={e => this.handleChange(e)}
                  />
                  <span className="icon is-small is-left" />
                  <span className="icon is-small is-right" />
                </div>
              </div>
              <div class="field">
                <label class="label">Message</label>
                <div class="control">
                  <textarea
                    class="textarea"
                    placeholder="Textarea"
                    name="message"
                    type="text"
                    value={this.state.message}
                    onChange={e => this.handleChange(e)}
                  />
                </div>
              </div>
              <input className="spaceinput" type="file" onChange={e => this.handleFileUpload(e)} />
              <div className="messageOk">
                {
                  this.state.created ? <p>Gift created!</p> : null
                }
              </div>
              <button className="btn3" type="submit">
                Create
            </button>
              <button
                className="btn4"
                onClick={() => this.showModal(this.state.modalId)}
              >
                See your Voucher
            </button>{" "}
            </form>
          </div>
          <ModalVoucher
            voucher={this.state.vouchers}
            modalId={this.state.modalId}
          />
          <div className="boximgvoucher">
            <img className="voucherimg" src="/img/fakepicture1.png" alt="imgvoucher" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Voucher;

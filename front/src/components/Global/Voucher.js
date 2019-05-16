import React from 'react';
import ArtService from '../art-service';

class Voucher extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      receiver: "",
      creator: "",
      description: "",
      imageUrl: "",
      error: ""
    }
    this.ArtService = new ArtService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();

    const { title, receiver, creator, description, imageUrl } = this.state

    this.ArtService.newVoucher(title, receiver, creator, description, imageUrl)
      .then(() => {
        this.setState({
          title: "",
          receiver: "",
          creator: "",
          description: "",
          imageUrl: "",
          error: ""
        });
      })
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <React.Fragment>
        <h1>Create your new experience!</h1>
        <form className="movie-form" onSubmit={this.handleFormSubmit}>
          <label>Title:</label>
          <input
            className="input-form"
            name="title"
            type="text"
            value={this.state.title}
            onChange={e => this.handleChange(e)} />
          <label>To:</label>
          <input
            className="input-form"
            name="receiver"
            type="text"
            value={this.state.receiver}
            min="0"
            onChange={e => this.handleChange(e)} />
          <label>From:</label>
          <input
            className="input-form"
            name="creator"
            type="text"
            value={this.state.creator}
            onChange={e => this.handleChange(e)} />
          <label>Message:</label>
          <input
            className="input-form"
            name="description"
            type="text"
            value={this.state.description}
            onChange={e => this.handleChange(e)} />
          <input type="submit" value="CREATE" />
        </form>

        <p>{this.state.error.length > 0 ? this.state.error : null}</p>

      </React.Fragment>
    )
  }
}

export default Voucher;
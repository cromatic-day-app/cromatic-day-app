import React from 'react';
import "./ModalVoucher.css";

class ModalVoucher extends React.Component {

  showModal = (modalId) => {
    console.log(modalId);
    const modal = document.getElementById(modalId);
    console.log(modal)
    modal.className = "modal is-active";
  }

  closeModal = (modalId) => {
    const modal = document.getElementById(modalId);
    modal.className = "modal";
  }

  render() {
    let voucher = this.props.voucher;
    console.log(voucher)
    return (
      <div id={this.props.modalId} className="modal">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head modal-artwork-title">
            <p className="modal-card-title">{voucher.title}</p>
            <button className="delete" aria-label="close" onClick={() => this.closeModal(this.props.modalId)}></button>
          </header>
          <section className="modal-card-body">
            <img
              src={voucher.userPhoto}
              alt="img"
            />
            <p>To: {voucher.receiver}</p>
            <p>From: {voucher.creator}</p>
            <p>Message: {voucher.message}</p>
          </section>
          <footer className="modal-card-foot">
            <button onClick={() => this.closeModal(this.props.modalId)} className="button">Cancel</button>
          </footer>
        </div>
      </div>
    )
  }
}

export default ModalVoucher;

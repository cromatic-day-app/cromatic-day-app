import React from 'react';

class ModalCard extends React.Component {
  constructor(props) {
    super(props);
  }

  showModal = (modalId) => {
    console.log(modalId);
    const modal = document.getElementById(modalId);
    modal.className = "modal is-active";
  }

  closeModal = (modalId) => {
    const modal = document.getElementById(modalId);
    modal.className = "modal";
  }

  render() {
    let artwork = this.props.artwork;
    let idx = this.props.idx;
    return (
      <div id={"m" + idx} className="modal">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{artwork.title}</p>
            <button className="delete" aria-label="close" onClick={() => this.closeModal("m" + idx)}></button>
          </header>
          <section className="modal-card-body">
            <img
              src={artwork.primaryImageSmall}
              alt="Placeholder image"
            />
            <p>{artwork.date}</p>
            <p>{artwork.price}€</p>
          </section>
          <footer className="modal-card-foot">
            <button onClick={() => this.closeModal("m" + idx)} className="button">Cancel</button>
          </footer>
        </div>
      </div>
    )
  }
}

export default ModalCard;

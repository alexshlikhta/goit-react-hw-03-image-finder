import { createPortal } from 'react-dom';
import React, { Component } from 'react';

const modal = document.querySelector('#modal');

export default class ImagesModal extends Component {
  state = {
    sourceImg: '',
  };

  componentDidMount() {
    window.addEventListener('keydown', this.keyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyDown);
  }

  keyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  bgClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    const { imagesModal } = this.props;
    
    return createPortal(
      <div className="Overlay" onClick={this.bgClick}>
        <div className="Modal">
          <img src={imagesModal} alt="images" />
        </div>
      </div>,
      modal,
    );
  }
}
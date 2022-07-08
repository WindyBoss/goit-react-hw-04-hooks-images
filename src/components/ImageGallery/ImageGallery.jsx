import { Component } from 'react';

import GalleryRender from './GalleryRender';
import Modal from '../Modal';

class ImageGallery extends Component {
  state = {
    openModal: false,
    clickedImg: {},
  };

  handleKeyDown = (e) => {
    if (e.code === 'Escape') {
      this.toggleModal();
    }
  };

  handleBackBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      this.toggleModal();
    }
  };

  toggleModal = () => {
    this.setState(prevState => ({ openModal: !prevState.openModal }));
  };

  findClickedImg = (id, images) => {
    const clickedImg = images.filter((img => img.id === id))[0];
    this.setState(prevState => ({ clickedImg: clickedImg, openModal: !prevState.openModal }));
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown)
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  };

  render() {
    const images = this.props.response.hits;
    const { openModal, clickedImg } = this.state;
    const modalImg = clickedImg.largeImageURL;
    const clickedimgName = clickedImg.tags;
    const { pageNumber } = this.props;

    return (
      <>
        <GalleryRender images={images} onClick={this.findClickedImg} page={pageNumber}/>
        {openModal && <Modal image={modalImg} name={clickedimgName} onClick={this.handleBackBackdropClick}/>}
      </>
    );
  };
};

export default ImageGallery;

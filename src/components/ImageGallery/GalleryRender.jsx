import { Component } from 'react';

import { ImageGalleryWrapper, ImageWrapper, ImageGalleryItem } from './ImageGallery.styled';

class GalleryRender extends Component {

  state = {
    images: []
  };

  uniqKeepLast(images, id) {
    return [...new Map(images.map(image => [id(image), image])).values()];
  };

  setPropsImage() {
    this.setState({ images: this.props.images });
  };

  componentWillUnmount() {
    this.setPropsImage();
  };

  componentDidMount() {
    this.setPropsImage();
  };

  componentDidUpdate() {
    const stateImage = this.state.images;
    const { page, images } = this.props;
    const allImages = [...stateImage, ...images];

    if (stateImage.length + images.length <= page * 20 && stateImage !== images) {
      const uniqueImages = this.uniqKeepLast(allImages, image => image.id);
      this.setState({ images: [...uniqueImages] });
    };
  };

  render() {
    const { onClick } = this.props;
    const { images } = this.state;

    return (
      <ImageGalleryWrapper>
        {images.map(image => {

          const { webformatURL, id, tags } = image;

          return (
            <ImageGalleryItem key={id}
              onClick={() => onClick(id, images)}>
              <ImageWrapper src={webformatURL} alt={tags} />
            </ImageGalleryItem>
          )

        })}
      </ImageGalleryWrapper>
    );
  };
};

export default GalleryRender;

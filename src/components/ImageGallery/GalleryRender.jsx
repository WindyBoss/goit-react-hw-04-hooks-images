import LazyLoad from 'react-lazyload';
import PropTypes from 'prop-types';

import { ImageGalleryWrapper, ImageWrapper, ImageGalleryItem } from './GalleryRender.styled';

const GalleryRender = ({ images, onClick }) => {
  return (
    <ImageGalleryWrapper lazyload>
      {images.map(image => {
        const { webformatURL, id, tags } = image;
        return (
          <ImageGalleryItem key={id}
            onClick={() => onClick(id, images)}>
            <LazyLoad offset={100}>
              <ImageWrapper src={webformatURL} alt={tags} />
            </LazyLoad>
          </ImageGalleryItem>
      )})}
    </ImageGalleryWrapper>
  );
};

GalleryRender.propTypes = {
  images: PropTypes.arrayOf(Object).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default GalleryRender;

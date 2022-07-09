import PropTypes from 'prop-types';

import { BallTriangle } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

export default function Loader({height, width, color}) {
  return (
    <LoaderContainer>
      <BallTriangle
        height={height}
        width={width} 
        color={color} 
        ariaLabel='loading'
      />
    </LoaderContainer> 
  );
};

Loader.propTypes = {
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
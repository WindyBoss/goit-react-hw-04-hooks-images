import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

import Loader from 'components/Loader';
import { ButtonLabel, btnStyles } from './LoadMoreButton.styled';

export default function LoadMoreBtn ({ onClick, loading, condition }) {
  return (
    <>
      <Button sx={btnStyles} onClick={onClick} size='large' variant="contained">
        { condition() && <Loader height="30px" width="30px" color='white'/> }
        <ButtonLabel loading={condition ? loading : null}>Load More</ButtonLabel>
      </Button>
      </>
    );
  };

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
  loading: PropTypes.string.isRequired,
  condition: PropTypes.func.isRequired,
};

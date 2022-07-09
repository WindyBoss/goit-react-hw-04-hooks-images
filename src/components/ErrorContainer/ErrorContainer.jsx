import PropTypes from 'prop-types';

import { ErrorLabel, iconStyle } from './ErrorContainer.styled';
import ErrorOutlineTwoToneIcon from '@mui/icons-material/ErrorOutlineTwoTone';

export default function ErrorContainer ({errorMessage}) {
  return (
    <>
      <ErrorOutlineTwoToneIcon sx={iconStyle}/>
      <ErrorLabel>
        {errorMessage}
      </ErrorLabel>
    </>
  );
};

ErrorContainer.propTypes = {
  errorMessage: PropTypes.string.isRequired,
};
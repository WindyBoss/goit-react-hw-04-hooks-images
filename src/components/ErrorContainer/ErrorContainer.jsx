
import { BiError } from 'react-icons/bi';

import { ErrorLabel } from './ErrorContainer.styled';

export default function ErrorContainer () {
  return (
    <>
      <BiError />
      <ErrorLabel>
        Sorry, I did not find the result of your search, please text valide tags
      </ErrorLabel>
    </>
  );
  };

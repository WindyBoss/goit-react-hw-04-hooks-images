import { BallTriangle } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';



export default function Loader(props) {

  const { condition } = props;

    return (
      <>
        {condition && (
          <LoaderContainer>
            <BallTriangle
              height="400"
              width="400"
              color='#3f51b5'
              ariaLabel='loading'
            />
          </LoaderContainer>
        )
        }
      </>
    );
  };

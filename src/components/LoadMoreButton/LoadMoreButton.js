import { LoadMoreButton, ButtonLabel } from './LoadMoreButton.styled';
import { BallTriangle } from  'react-loader-spinner'


export default function LoadMoreBtn (props) {

    const { onClick, loading, condition } = props;

    return (
      <>
          <LoadMoreButton onClick={onClick}>
            {condition() ? (
              <>
                <BallTriangle
                  height="30"
                  width="30"
                  color='white'
                  ariaLabel='loading'
                />
                <ButtonLabel loading={loading}>Load More</ButtonLabel>
              </>
            ) :
              <ButtonLabel>Load More</ButtonLabel>
            }
          </LoadMoreButton>
      </>
    );
  };

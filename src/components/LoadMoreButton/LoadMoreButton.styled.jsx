import styled from 'styled-components';

export const ButtonLabel = styled.span`
margin-left: ${props => {
  if (props.loading === 'loading') {
    return '20px'
  };
}};
`;


export const btnStyles = { 
  marginTop: '30px',
  marginBottom: '30px',
  minWidth: '250px',
  backgroundColor: '#3f51b5',
}

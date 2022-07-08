import styled from 'styled-components';

export const LoadMoreButton = styled.button`
display: flex;
align-items: center;

background-color: #3f51b5;
color: white;
padding: 8px 20px;

margin-top: 20px;
`;

export const ButtonLabel = styled.span`
margin-left: ${props => {
  if (props.loading === 'loading') {
    return '20px'
  };
}};
`;

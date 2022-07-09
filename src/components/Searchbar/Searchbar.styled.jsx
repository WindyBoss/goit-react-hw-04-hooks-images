import styled from 'styled-components';

export const SearchbarWrapper = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchForm = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 350px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  max-height: 40px;
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 200px;
  font: inherit;
  font-size: 14px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  ::placeholder {
    margin-left: 10px;
  font: inherit;
  font-size: 12px;
}
`;

export const searchFormSelect = {
  position: 'absolute',
  top: '0px',
  right: '0px',
  maxHeight: '34px',
  fontSize: '12px',
}

export const searchFormButton = {
  padding: '3px',
  backgroundColor: 'rgb(239, 239, 239)',
  borderRadius: '5px',
}
import { SearchbarWrapper, SearchFormInput, SearchFormButton, SearchForm, SearchFormLabel } from './Searchbar.styled';
import { BsSearch } from 'react-icons/bs';



export default function Searchbar(props) {

  const onSubmit = (e) => {
    e.preventDefault();

    const input = e.target.closest('button').nextSibling;
    let keyword = input.value;

    props.onClick(keyword);
    clearInput(input);
  };

  const clearInput = (input) => {
    input.value = '';
  }


  return (
    <SearchbarWrapper>
      <SearchForm>
        <SearchFormButton type="submit" onClick={onSubmit}>
          <BsSearch/>
          <SearchFormLabel>Search</SearchFormLabel>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarWrapper>
  );
}

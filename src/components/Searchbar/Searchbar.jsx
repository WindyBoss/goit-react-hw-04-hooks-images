import PropTypes from 'prop-types';
import { useForm } from "react-hook-form";

import { MenuItem, Select, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { SearchbarWrapper, SearchFormInput, searchFormSelect, searchFormButton, SearchForm } from './Searchbar.styled';

export default function Searchbar({onClick, onSelect}) {
  const { register, handleSubmit, reset } = useForm();
  
  const onSubmit = data => {
    onSelect(data.pictureToLoad);
    onClick(data.keyword);
    reset();
  };

  return (
    <SearchbarWrapper>
    <SearchForm onSubmit={handleSubmit(onSubmit)}>
      <IconButton size='large' sx={searchFormButton} type='submit'>
        <SearchIcon fontSize='inherit'/>
      </IconButton>
      <SearchFormInput defaultValue="" {...register("keyword")} />
      <Select defaultValue={20} sx={searchFormSelect} {...register("pictureToLoad")}
        label='Picture to load'
        labelId="demo-simple-select-label"
        id="demo-simple-select">
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={50}>50</MenuItem>
      </Select>
    </SearchForm>
    </SearchbarWrapper>
  );
}

Searchbar.propTypes = {
  onClick: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
};
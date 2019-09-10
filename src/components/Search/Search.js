import React from 'react';
import { StyledSearch } from './search.style';

const Search = ({ value, onChange }) => (
  <StyledSearch>
    <input placeholder="Pesquisar heroi " type="text"  name="hero" value={value} onChange={onChange} />
    <button name="hero" value={value} onChange={onChange}> Pesquisar </button>
  </StyledSearch>
  
);
export default Search;

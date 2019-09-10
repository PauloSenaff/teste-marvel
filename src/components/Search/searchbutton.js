import React from 'react';
import { StyledButton } from './searchbutton.style';

const SearchButton = ({ value, onChange }) => (
    <StyledButton>
      <button value={value} onChange={onChange}> Pesquisar </button>
    </StyledButton>
);
export default SearchButton;

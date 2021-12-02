import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Styled/Button";
import Input from "./Styled/Input";
import search from "../../Images/Icons/icon-search.svg";

export const SearchbarWrapper = styled.div`
  display: flex;
  margin-bottom: 2.4rem;
`;

const Searchbar = ({ onSearchSubmit }) => {
  const [input, setInput] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(input);
  };

  return (
    <SearchbarWrapper>
      <form onSubmit={onFormSubmit}>
        <Input
          type="text"
          placeholder="Search by company symbol"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button square type="submit">
          <img src={search} alt="search-icon" />
        </Button>
      </form>
    </SearchbarWrapper>
  );
};

export default Searchbar;

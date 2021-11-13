import React from 'react';
import styled from 'styled-components';
import Button from './Styled/Button';
import Input from './Styled/Input';
import search from '../../Images/Icons/icon-search.svg';

export const SearchbarWrapper = styled.div`
    display: flex;
    margin-bottom: 2.4rem;  
`;

const Searchbar = ({ onButtonClick, onSearchChange, onEnterPress}) => {
    return (
        <SearchbarWrapper>        
            <Input 
            type='text'
            placeholder='Search company'                                          
            onChange={onSearchChange}
            onKeyPress={onEnterPress}
            />            
            <Button
            square            
            onClick={onButtonClick}>
                <img src={search} alt='search-icon'/>
            </Button>
        </SearchbarWrapper>        
    );
}

export default Searchbar;

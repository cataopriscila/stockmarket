import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Input from './Input';
import search from '../../Images/Icons/icon-search.svg';

const SearchbarWrapper = styled.div`
    display: flex;
    margin-bottom: 2.4rem;  
`;

const Searchbar = ({ onButtonClick, onSearchChange}) => {
    return (
        <SearchbarWrapper>        
            <Input 
             type='text'
            placeholder='Search company'                                          
             onChange={onSearchChange}   
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

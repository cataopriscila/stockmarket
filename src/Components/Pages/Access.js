import React from 'react';
import Button from '../Commons/Button';
import Input from '../Commons/Input';
import SearchbarWrapper from '../Commons/SearchBar';


const Access = () => {
    return (
        <SearchbarWrapper>
            <Input type='text'/>
            <Button type='button'>Start</Button>
        </SearchbarWrapper>
    );
}

export default Access;

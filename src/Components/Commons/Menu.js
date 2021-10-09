import React from 'react';
import styled from 'styled-components';
import logo from '../../Images/Icons/monetus-logo.svg';
import home from '../../Images/Icons/icon-home.svg';

const MenuWrapper = styled.nav`
    display: block;
    background-color: white;

    & img {
        margin: 2rem 2.5rem;
        }

    
`;


const Menu = () => {
    return (
        <MenuWrapper>
            <img  src={logo} alt=''/>
            <img  src={home} alt=''/>
        </MenuWrapper>
    )
}

export default Menu;

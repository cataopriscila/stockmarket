import React from 'react';
import styled from 'styled-components';
import logo from '../../Images/Icons/monetus-logo.svg';
import home from '../../Images/Icons/icon-home.svg';
import Image from './Image';


const MenuWrapper = styled.nav`
    display: block;    
    background-color: white;   
    
`;

const Menu = () => {
    return (
        <MenuWrapper >
            <Image menu src={logo} alt=''/>
            <Image menu src={home} alt=''/>
        </MenuWrapper>
    )
}

export default Menu;

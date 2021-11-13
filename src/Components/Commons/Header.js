import React from 'react';
import styled from 'styled-components';
import dashboard from '../../Images/Icons/icon-dashboard.svg';
import HeaderWrapper from './Styled/HeaderWrapper';

const Title = styled.h1`
color: #14171A;
width: 12.5rem;
height: 2.8rem;
font-style: bold;
font-size: 2.4rem;
font-weight: 600;
line-height: 2.8rem;
letter-spacing: -0.0075em;
`;

const Header = ({title}) => {
    return (
        <HeaderWrapper>
            <img src={dashboard} alt='dashboard'/>
            <Title>{title}</Title>  
        </HeaderWrapper>              
        
    );
}

export default Header;

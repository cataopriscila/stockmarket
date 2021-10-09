import React from 'react';
import styled from 'styled-components';
import dashboard from '../../Images/Icons/icon-dashboard.svg';

const HeaderWrapper = styled.div`
    display: flex;    
    align-items: center;
    margin: .8rem 0;
    gap: 1.1rem;

    & img {
        width: 2.4rem;
        height: 2.8rem;
    }
`;

const Title = styled.h1`
color: #14171A;
font-style: bold;
font-weight: 600;
font-size: 2.4rem;
line-height: 2.8rem;
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

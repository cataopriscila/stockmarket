import React from 'react';
import styled, {css} from 'styled-components';

const Content = styled.section`
    display: grid;  
    width: 100%; 
       
    ${props => props.menuTop? css`
        grid-template-columns: 88.6rem 39.4rem;
        grid-template-rows: 9.6rem 1fr;

        & nav {
            grid-column-start: span 2;
        } 

    ` : css`
        grid-template-columns: 9.6rem 1fr 39.4rem;         
        grid-template-rows: 100vh;
    `};   
    }
`;

const PageLayout = ({children, menuTop}) => {
    return (
        <Content menuTop={menuTop} >
            {children}            
        </Content>        
        
    );
}

export default PageLayout;

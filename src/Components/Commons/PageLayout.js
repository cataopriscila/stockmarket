import React from 'react';
import styled, {css} from 'styled-components';

const Content = styled.section`
    display: grid; 
    
    ${props => props.menuTop? css`
        grid-template-columns: 1fr;
        grid-template-rows: 15vh 85vh;
        
    ` : css`
        grid-template-columns: 9.6rem 1fr;
        grid-template-rows: 100vh;    
    `};    
`;

const PageLayout = ({children, menuTop}) => {
    return (
        <Content menuTop={menuTop}>
            {children}            
        </Content>        
        
    );
}

export default PageLayout;

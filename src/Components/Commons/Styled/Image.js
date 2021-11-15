import styled, { css } from "styled-components";

const Image = styled.img.attrs(props => ({
    alt:''      
}))`  
    content: ${props=> props.src};
    ${props => props.menu? css`
    margin: 2rem 2.5rem;
    cursor: pointer;
    `: css`
    margin: 0;
    `}
    ${props => props.avatar? css`
    margin: .5rem;
    width: 3.2rem;
    background: #0047BB;
    border-radius: 50%;    
    `: css`
    width: initial;
    background: initial;       
    `}    
    ${props => props.trash? css`
    cursor: pointer;
    `: css`
    position: initial;  
    `}   
    
`;

export default Image;
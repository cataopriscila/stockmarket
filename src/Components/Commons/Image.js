import styled, { css } from "styled-components";

const Image = styled.img.attrs(props => ({
    alt:''      
}))`    
    margin: ${props => props.menu? '2rem 2.5rem': '0'};
    content: ${props=> props.src};
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
    ${'' /* position: relative;
    top: 3rem;
    left: 37rem;       */}
    `: css`
    position: initial;  
    `}   
    
`;

export default Image;
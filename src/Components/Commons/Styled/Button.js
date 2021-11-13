import styled, {css} from "styled-components";

const Button = styled.button`
    color: white;
    background: #0047BB;    /* ${props => props.secondary? props.theme.secondColor : props.theme.firstColor }; */     
    padding: 0;
    ${props => props.square? css`
    width: 4rem;
    height: 4rem;       
    border-radius: .8rem; 

    & img {
        width: 2rem;
        height: 2rem;                
    }   
    ` 
    : css`
    width: 12rem;
    height: 4rem;      
    border-radius: .4rem;    
    ` }    
    
    border: none;    
    cursor: pointer;
    
    &:disabled {
        background: #ccc;
        color: #eee;
    }
`;

export default Button;

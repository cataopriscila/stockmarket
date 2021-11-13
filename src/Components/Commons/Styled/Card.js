import styled, { css } from "styled-components";

export const Card = styled.div`    
    
    background: #FFFFFF;    
    border-radius: .8rem;
    position: relative;

    ${props => props.favourite? css` 
    display: flex;
    align-items: center;       
    justify-content: space-between;
    box-shadow: 0px 8px 20px -2px rgba(43, 37, 63, 0.1);   
    padding: 1.2rem 1.6rem;
    margin: 3.2rem 1.4rem 0 0;
    width: 32.2rem;
    height: 6.9rem;   
    
    ` : css`
    
    display: grid;
    grid-template-columns: 1fr 1fr 4fr 1fr;
    grid-template-rows: 1fr;
    justify-items: start;
    align-items: center; 
    justify-content: center;   
    padding: 1.2rem 1.6rem;
    margin: auto 1.2rem;
    width: 31rem;
    min-width: 31rem;
    height: 5.7rem;   
    
    `}
`;

export default Card;
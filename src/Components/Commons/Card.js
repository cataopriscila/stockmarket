import styled, { css } from "styled-components";

export const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #FFFFFF;    
    box-shadow: 0px 8px 20px -2px rgba(43, 37, 63, 0.1);
    border-radius: .8rem;
    position: relative;

    ${props => props.favourite? css`        
    
    padding: 1.2rem 1.6rem;
    margin: 3.2rem 0;
    width: 32.2rem;
    height: 6.9rem;   
    
    ` : css`
    padding: 1.6rem;
    margin: auto 2rem;
    width: 29.9rem;
    min-width: 29rem;
    height: 7.3rem;   
    
    `}
`;

export default Card;
import styled, { css } from "styled-components";

const FontStyle = styled.h4` 
    padding: .2rem;
    margin: 0;    
    ${props=> props.symbol? css`
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 2rem;
    letter-spacing: -0.005em;
    color: #14171A;
    `   
    : css`
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.4rem;
    display: inline-block;
    color: #657786; 
    `}
    `;


export default FontStyle;
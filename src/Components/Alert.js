import React from 'react';
import styled from 'styled-components';
import FontStyle from './Commons/Styled/FontStyle';


const StyledAlert = styled.div`
    width: 100%;
    height: 100%;    
    position: absolute;          
    z-index: 6;
    background-color: rgba(0,0,0, 0.6); 
    display: ${props => props.display? 'block': 'none'};
    transition: all 1s;
`;

const StyledAlertMessage = styled(FontStyle)`    
    color: black; 
    font-size: 2rem;
    padding: 6rem 10rem;
    background-color: rgba(255,255,255, 0.7); 
    border-radius: .8rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
    cursor: pointer;   
`;

const Alert = ({alert, alertDisplay, goBack}) => { 

     
    return (
        <StyledAlert display={alertDisplay}>
        <StyledAlertMessage onClick={goBack}>{`${alert}  ⟲`}</StyledAlertMessage>                        
        </StyledAlert>
    );
}

export default Alert;

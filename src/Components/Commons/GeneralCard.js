import React from 'react';
import styled, { css } from 'styled-components';
import Card from './Card';
import FontStyle from './FontStyle';
import { FontValues } from './GraphArea';
import graphup from "../../Images/Icons/icon-graph-up.svg";
import graphdown from "../../Images/Icons/icon-graph-down.svg";



import Image from './Image';

export const ImageLogo = styled(Image)` 
    border-radius: 50%;
    position: absolute;
  ${props=> props.recent? css`    
    width: 3.6rem;
    height: 3.6rem;
    border: .4rem solid #A9ADB180; 
  `: css`
  width: 4.5rem;
  height: 4.5rem; 
  
  `} 
`;

export const CompanyInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 5.2rem;     
`;

export const CompanyValues = styled.div`
    display: flex;
    gap: .5rem;

`;

const GeneralCard = (props) => {
    const {companySymbol, companyName, changePercent} = props;
    let upOrDown = Math.sign(changePercent); 
    console.log(upOrDown);

    return (        
        <Card {...props}>
            <ImageLogo recent {...props}/>
            <CompanyInfo>
              <FontStyle symbol>{companySymbol}</FontStyle>
              <FontStyle >{companyName}</FontStyle>    
            </CompanyInfo>

            <CompanyValues>        
            {upOrDown === -1 || upOrDown === -0? 
            (<FontValues>{`${changePercent}%`}</FontValues>)   
           :(<FontValues up>{`+${changePercent}%`}</FontValues>)                   
        }         
         <img src={upOrDown === -1 || upOrDown === -0? graphdown : graphup} alt='rate'/>     
        </CompanyValues>                       
        </Card>
            
        
    );
}

export default GeneralCard;

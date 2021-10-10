// font-family: 'Montserrat', sans-serif;

import styled from "styled-components";
import Image from './Image';
import Card from './Card';
import trash from '../../Images/Icons/icon-trash.svg';
import FontStyle from "./FontStyle";
import graphup from "../../Images/Icons/icon-graph-up.svg";
import graphdown from "../../Images/Icons/icon-graph-down.svg";
import { FontValues } from "./Graph";


export const ImageLogo = styled(Image)`  
  width: 4.5rem;
  height: 4.5rem; 
  border-radius: 50%;
  position: absolute;
`;

const CompanyInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 5.2rem;     
`;

const CompanyValues = styled.div`
    display: flex;
    gap: .5rem;

`;

const CompanyCard = ({logo, companySymbol, companyName, removeFavourites, id, changePercent}) => {    
 
  let upOrDown = Math.sign(changePercent); 
  console.log(upOrDown)
  
    return (
    <>
      <Card favourite>
        <ImageLogo src={logo} alt="logo" />
        <CompanyInfo>            
            <FontStyle symbol>{companySymbol}</FontStyle>
            <FontStyle>{companyName}</FontStyle> 
        </CompanyInfo>
        <CompanyValues>        
        
        
        {upOrDown === -1 || upOrDown === -0? 
            (<FontValues>{`${changePercent}%`}</FontValues>)   
           :(<FontValues up>{`+${changePercent}%`}</FontValues>)                   
        }  
        <img src={upOrDown === -1 || upOrDown === -0? graphdown : graphup} alt='rate'/>      
        </CompanyValues>
        <Image
        trash
        src={trash}
        alt='trash'
        id={id}
        onClick={removeFavourites}           
        />                        
      </Card>
           
    </>
  );
};

export default CompanyCard;
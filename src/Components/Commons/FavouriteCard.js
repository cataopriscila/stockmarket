import styled from "styled-components";
import Image from './Styled/Image';
import Card from './Styled/Card';
import trash from '../../Images/Icons/icon-trash.svg';
import FontStyle from "./Styled/FontStyle";
import graphup from "../../Images/Icons/icon-graph-up.svg";
import graphdown from "../../Images/Icons/icon-graph-down.svg";
import { FontValues } from "./GraphArea";


export const ImageLogo = styled(Image)`  
  width: 4.5rem;
  height: 4.5rem; 
  border-radius: 50%;
  position: absolute;
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

export const FavouriteCardsWrapper = styled.div`
  display: flex;
  align-items: center;
`;


const FavouriteCard = ({favouriteCard, removeFromFavourites}) => { 
  const {logo, companySymbol, companyName, changePercent} = favouriteCard;

  const handleTrashClick = (e) => {
    removeFromFavourites(favouriteCard);    
  }
   
    return (
    <>
    <FavouriteCardsWrapper>
      <Card favourite>
        <ImageLogo src={logo} alt='logo' />
        <CompanyInfo>            
            <FontStyle symbol>{companySymbol}</FontStyle>
            <FontStyle>{companyName}</FontStyle> 
        </CompanyInfo> 
        {changePercent?(
          <CompanyValues> 
        {changePercent < 0? 
            (<FontValues>{`${changePercent}%`}</FontValues>)   
           :(<FontValues up>{`+${changePercent}%`}</FontValues>)                   
        }  
        <img src={changePercent < 0? graphdown : graphup} alt='rate'/>      
        </CompanyValues>
        ) : 
        (<FontValues>no data</FontValues>)
        }                                
      </Card>
      <Image
        trash
        src={trash}
        alt='trash'        
        onClick={handleTrashClick}           
        />
    </FavouriteCardsWrapper>          
    </>
  );
};

export default FavouriteCard;


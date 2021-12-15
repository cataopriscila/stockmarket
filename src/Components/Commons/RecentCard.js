import styled, { css } from "styled-components";
import Card from "./Styled/Card";
import FontStyle from "./Styled/FontStyle";
import { FontValues } from "./GraphArea";
import graphup from "../../Images/Icons/icon-graph-up.svg";
import graphdown from "../../Images/Icons/icon-graph-down.svg";
import emptystar from "../../Images/Icons/icon-emptystar.svg";
import fullstar from "../../Images/Icons/icon-fullstar.svg";
import Image from "./Styled/Image";
import { useState } from "react";

export const ImageLogo = styled(Image)`
  border-radius: 50%;

  ${(props) =>
    props.favourite
      ? css`
          width: 4.5rem;
          height: 4.5rem;
          position: absolute;
        `
      : css`          

          width: 3.6rem;
          height: 3.6rem;
          border: 0.4rem solid #a9adb180;
        `}
`;

export const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: ${(props) => (props.favourite ? "5.2rem" : ".5rem")};
  flex: 0 1 auto;
`;

export const CompanyValues = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const RecentCard = ({recentCard, addFromRecents, ...props}) => {
  const {logo, symbol, companyName, changePercent } = recentCard; 

  const [isStarClicked, setIsStarClicked] = useState(false);   

  const toggleStar = () => {
    setIsStarClicked(s => !s);      
  }
  
  const handleStarClick = (e) => {
    addFromRecents(recentCard, e);            
    return e.defaultPrevented? null : toggleStar();    
  } 
    
  return (
    <Card  {...props}>
      <Image        
        style={{ cursor: "pointer" }}
        src={isStarClicked? fullstar : emptystar}
        alt="empty-star"
        onClick={handleStarClick}
        {...props}
      />

      <ImageLogo src={logo} alt='logo' {...props}/>
      <CompanyInfo {...props}>
        <FontStyle symbol>{symbol}</FontStyle>
        <FontStyle>{companyName}</FontStyle>
      </CompanyInfo>

      <CompanyValues>
        {changePercent < 0 ? (
          <FontValues>{`${changePercent}%`}</FontValues>
        ) : (
          <FontValues up>{`+${changePercent}%`}</FontValues>
        )}
        <img
          src={changePercent < 0 ? graphdown : graphup}
          alt="rate"
        />
      </CompanyValues>
    </Card>
  );
};

export default RecentCard;

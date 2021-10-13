import React from "react";
import styled from "styled-components";
import ButtonForward from "../../Images/Icons/icon-button-forward.svg";
import ButtonBack from "../../Images/Icons/icon-button-back.svg";
// import Card from './Card';
import HeaderWrapper from "./HeaderWrapper";
import Image from "./Image";
import SubTitle from "./SubTitle";
import stats from "../../Images/Icons/icon-stats.svg";
import { HeaderSpreader } from "./GraphArea";
import GeneralCard from "./GeneralCard";
import FontStyle from "./FontStyle";


const CarouselWrapper = styled.div`
  width: 115rem;
  height: 26.5rem;
  display: flex;
  flex-direction: column;
  margin: -2.2rem 0;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const SlideController = styled.div`  
  width: 4rem;
  display: flex;
  margin-left: 36rem;

`;

const CarouselSpreader = styled(HeaderSpreader)`
  width: 60%;
  align-items: center;
  margin-top: 1rem;
  
`;

const SlideButton = styled.img`
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 0.5rem;
  cursor: pointer;

`;

const Flex = styled.div`
  display: inline-flex;
  width: 100%; 
  max-width: 130rem; 
  transition: all 1s;
  transform: translateX(${props => props.transform}px);
  
  
`;

const Carousel = (props) => {

  const { subtitle, recents, addFromRecents, slideForward, slideBack } = props;

  
  return (
    <>
      <CarouselWrapper>        
          <HeaderWrapper>
            <Image src={stats} alt="stats" />
            <SubTitle>{subtitle}</SubTitle>          
          <SlideController>
            <SlideButton onClick={slideForward} src={ButtonForward} alt="btn" />
            <SlideButton onClick={slideBack} src={ButtonBack} alt="btn" />
          </SlideController>
          </HeaderWrapper>
        <CarouselSpreader>
        <Flex {...props}>
          {!recents.length ? (
            <FontStyle symbol>LOADING</FontStyle>
          ) : (
            recents.map((value, i) => {
              return (
                <GeneralCard
                  addFromRecents={addFromRecents}                                 
                  src={recents[i].logo}
                  companySymbol={recents[i].companySymbol}
                  companyName={recents[i].companyName}
                  changePercent={recents[i].changePercent}
                  symbol
                  key={i}
                  id={i}
                />
              );
            })
          )}         
        </Flex>
        </CarouselSpreader>
      </CarouselWrapper>
    </>
  );
};

export default Carousel;
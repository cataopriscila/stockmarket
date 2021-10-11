import React from "react";
import styled from "styled-components";
import ButtonBack from "../../Images/Icons/icon-button-back.svg";
import ButtonForward from "../../Images/Icons/icon-button-foward.svg";
// import Card from './Card';
import HeaderWrapper from "./HeaderWrapper";
import Image from "./Image";
import SubTitle from "./SubTitle";
import stats from "../../Images/Icons/icon-stats.svg";
import { HeaderSpreader } from "./GraphArea";
import GeneralCard from "./GeneralCard";
import FontStyle from "./FontStyle";


const CarouselWrapper = styled.div`
  width: 118.3rem;
  height: 26.5rem;
  display: flex;
  flex-direction: column;
  margin: -2.2rem 0;
  justify-content: center;
  position: relative;
`;

const SlideController = styled.div`
  width: 4rem;
  display: flex;
`;

const CarouselSpreader = styled(HeaderSpreader)`
  width: 76.5rem;
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
  width: 80%;
  overflow: hidden;
  margin: 0 -50px;
`;

const Carousel = (props) => {

  const { subtitle, recents, addFromRecents } = props;

  const slideForward = () => {
    
  }

  const slideBack = () => {
    
  }
  return (
    <>
      <CarouselWrapper>
        <CarouselSpreader>
          <HeaderWrapper>
            <Image src={stats} alt="stats" />
            <SubTitle>{subtitle}</SubTitle>
          </HeaderWrapper>
          <SlideController>
            <SlideButton onClick={slideBack} src={ButtonBack} alt="btn" />
            <SlideButton onClick={slideForward} src={ButtonForward} alt="btn" />
          </SlideController>
        </CarouselSpreader>
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
      </CarouselWrapper>
    </>
  );
};

export default Carousel;

// const CarouselWrapper = styled.div`
//     height: 26.5rem;
//     width:  78.9rem;

// `;

// const Carousel = () => {
//     return (
//         <CarouselWrapper>

//         </CarouselWrapper>
//     );
// }

// export default Carousel;

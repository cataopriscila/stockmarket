import React, {Fragment, useState, useEffect} from "react";
import iex from '../../api/iex';
import styled from "styled-components";
import ButtonForward from "../../Images/Icons/icon-button-forward.svg";
import ButtonBack from "../../Images/Icons/icon-button-back.svg";
import HeaderWrapper from "./Styled/HeaderWrapper";
import Image from "./Styled/Image";
import SubTitle from "./Styled/SubTitle";
import stats from "../../Images/Icons/icon-stats.svg";
import { HeaderSpreader } from "./GraphArea";
import RecentCard from "./RecentCard";
import FontStyle from "./Styled/FontStyle";


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

  @media (min-width: 1440px) {
    margin-left: auto;
  }
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

const Carousel = ({ subtitle, addFromRecents, wasNotRemoved }) => {
  const [slide, setSlide] = useState(0); 
  const [recents, setRecents] = useState([]); 

  const slideForward = (e) => {
    if(slide < 0) {
      setSlide(slide+100)
      } else { e.preventDefault();}    
  }
  
  const slideBack = (e) => {    
     if(slide > -3000) {
      setSlide(slide-100)
    } else { e.preventDefault(); }    
  }

 
  useEffect(() => {
    let arrayOfSymbols = [
      "TSLA",
      "AAPL",
      "BABA",
      "MSFT",
      "SBUX",
      "FB",
      "DIS",
      "NFLX",
      "TWTR",
      "JNJ",
    ];

    arrayOfSymbols.forEach( async (value,i) => { 

      try {
        const responseLogo = await iex.get(`/${value}/logo`);
      let logo = { logo: responseLogo.data.url };
      
      const responseData = await iex.get(`/${value}/quote`);
      let companyData = {
                    symbol: value,
                    companyName: responseData.data.companyName,
                    changePercent: responseData.data.changePercent,
                    id: i,                
                  };

      setRecents(prev => prev.concat({ ...logo, ...companyData }));
      } catch(err){
      setRecents([]);
      }
      
    })     
    
  },[]);
  
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
        <Flex transform={slide}>
          {!recents.length ? (
            <FontStyle symbol>LOADING</FontStyle>
          ) : 
          (recents.map((card, i) => <Fragment key={i}><RecentCard recentCard={card} addFromRecents={addFromRecents} /></Fragment>))          
          }         
        </Flex>
        </CarouselSpreader>
      </CarouselWrapper>
    </>
  );
};

export default Carousel;

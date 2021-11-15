import React, {useState } from "react";
import styled from "styled-components";
import Carousel from "../Commons/Carousel";
import GraphArea from "../Commons/GraphArea";
import Header from "../Commons/Header";
import Searchbar from "../Commons/SearchBar";

const DashBoardWrapper = styled.section`
  background-color: #f5f8fa;
  border-top-left-radius: 2.4rem;  
  display: flex;
  flex-direction: column;
  height: 80.1rem;
  padding: 0 2rem;
`;

const DashBoard = ({
  company,
  companySymbol,
  companyName,
  companyLogo,
  latestPrice,
  change,
  changePercent,
  isPending,
  onSearchSubmit,
  onButtonClick,
  addToFavourites,
  addFromRecents,
  recents,
  onEnterPress,
  apikey  
  
}) => {

  const [slide, setSlide] = useState(0);  
  const slideForward = (e) => {
    if(slide < 0) {
      setSlide(slide+100)
      } else { e.preventDefault();
       }
    
  }
  const slideBack = (e) => {    
    
     if(slide > -3000) {
      setSlide(slide-100)
    } else {
      e.preventDefault();
    }
    
  }

  return (
    <DashBoardWrapper>
      <Header title="Dashboard" />
      <Searchbar
        onSearchSubmit={onSearchSubmit}
        onButtonClick={onButtonClick}
        onEnterPress={onEnterPress}   
      />
      <GraphArea
        company={company}
        companySymbol={companySymbol}
        companyName={companyName}
        companyLogo={companyLogo}
        latestPrice={latestPrice}
        change={change}
        changePercent={changePercent}
        isPending={isPending}
        addToFavourites={addToFavourites}
        apikey={apikey}
      />
       <Carousel
       subtitle="Recent Companies"
       recents={recents}
       addFromRecents={addFromRecents}
       transform={slide}
       slideForward={slideForward}
       slideBack={slideBack}
       
       />  
    </DashBoardWrapper>
  );
};

export default DashBoard;

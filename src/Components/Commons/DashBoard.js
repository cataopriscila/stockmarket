import React, {useState } from "react";
import styled from "styled-components";
import Carousel from "./Carousel";
import GraphArea from "./GraphArea";
import Header from "./Header";
import Searchbar from "./SearchBar";

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
  onSearchSubmit,  
  addToFavourites,
  addFromRecents,
  recents,  
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
      />
      <GraphArea
        company={company}        
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

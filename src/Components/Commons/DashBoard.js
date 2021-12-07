import React from "react";
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

  @media(min-width:1440px)
    {     
        padding: 0 4rem;       
    }
`;

const DashBoard = ({
  company,  
  onSearchSubmit,  
  addToFavourites,
  addFromRecents, 
  recents,  
  apikey,
  
}) => {

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
       apikey={apikey}
       recents={recents}
       addFromRecents={addFromRecents}                
       />  
    </DashBoardWrapper>
  );
};

export default DashBoard;

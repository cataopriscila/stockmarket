import React from "react";
import styled from "styled-components";
import Carousel from "../Commons/Carousel";
import Graph from "../Commons/Graph";
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
  companySymbol,
  companyName,
  latestPrice,
  change,
  changePercent,
  onSearchChange,
  onButtonClick,
  addToFavourites,
}) => {
  return (
    <DashBoardWrapper>
      <Header title="Dashboard" />
      <Searchbar
        onSearchChange={onSearchChange}
        onButtonClick={onButtonClick}
      />
      <Graph
        companySymbol={companySymbol}
        companyName={companyName}
        latestPrice={latestPrice}
        change={change}
        changePercent={changePercent}
        addToFavourites={addToFavourites}
      />
      <Carousel/>
    </DashBoardWrapper>
  );
};

export default DashBoard;

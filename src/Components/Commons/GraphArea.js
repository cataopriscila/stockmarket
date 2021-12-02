import styled from "styled-components";
import emptystar from "../../Images/Icons/icon-emptystar.svg";
import graphup from "../../Images/Icons/icon-graph-up.svg";
import graphdown from "../../Images/Icons/icon-graph-down.svg";
import FontStyle from "./Styled/FontStyle";
import Image from "./Styled/Image";
import GraphChart from "./GraphChart";

const GraphWrapper = styled.div`
  width: 74.8rem;
  height: 42rem;
  border-radius: 0.8rem;
  position: relative;
  display: flex;
  flex-direction: column;
  background: #ffffff;

  .favourite {
    position: absolute;
    top: 3.5rem;
    left: 2rem;
    cursor: pointer;

    &:active,
    &:focus {
      transform: scale(0.4);
    }

    ~ span {
      visibility: hidden;
      display: none;
      position: absolute;
      padding: 0.8rem;
      text-align: center;
      color: white;
      font-size: 1.3rem;
      top: 0;
      left: 3.4rem;
      width: 16.1rem;
      height: 1.2rem;
      background: #0047bb;
      border-radius: 1rem 1rem 1rem 0;
      transition: all 3s;
    }
    &:hover ~ span {
      visibility: visible;
      display: inline-block;
      transform: scale(1.02);
    }
  }
  .stockStatus {
    padding-left: 0.5rem;
  }
`;

export const HeaderSpreader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const GraphName = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 40rem;
  height: 5rem;
  margin-top: 2.7rem;
  margin-left: 5.3rem;
`;

const GraphStockValues = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  width: 15.5rem;
  height: 4.5rem;
  margin-top: 2.5rem;
  margin-right: 2rem;
`;

export const FontValues = styled(FontStyle)`
  color: ${(props) => (props.up ? "#79C300" : "#D64B45")};
`;

const GraphArea = ({ company, addToFavourites, apikey }) => {
  const { symbol, companyName, change, latestPrice, changePercent } = company;

  return (
    <GraphWrapper>
      <HeaderSpreader>
        <Image
          className="favourite"
          src={emptystar}
          alt="empty-star"
          onClick={addToFavourites}
        />
        <span>Add to favourites</span>
        <GraphName>
          <FontStyle symbol>{symbol}</FontStyle>
          <FontStyle>{companyName}</FontStyle>
        </GraphName>
        <GraphStockValues>
          <img
            className="stockStatus"
            src={!change ? "" : change < 0 ? graphdown : graphup}
            alt=""
          />
          <FontStyle symbol>{latestPrice}</FontStyle>
          {!change ? (
            ""
          ) : change < 0 ? (
            <FontValues>{`$${change} (${changePercent}%)`}</FontValues>
          ) : (
            <FontValues up>{`$${change} (${changePercent}%)`}</FontValues>
          )}
        </GraphStockValues>
      </HeaderSpreader>
      <GraphChart apikey={apikey} companySymbol={symbol} />
    </GraphWrapper>
  );
};

export default GraphArea;

import styled from "styled-components";
import emptystar from "../../Images/Icons/icon-emptystar.svg";
import graphup from "../../Images/Icons/icon-graph-up.svg";
import graphdown from "../../Images/Icons/icon-graph-down.svg";
import FontStyle from "./FontStyle";
import Image from "./Image";
import GraphChart from "./GraphChart";

const GraphWrapper = styled.div`
  width: 74.8rem;
  height: 38rem;
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
      transform: scale(0.5);
    }

    ~ span {
      visibility: hidden;
      display: none;
      position: absolute;
      padding: 0.8rem;
      text-align: center;
      color: white;
      font-size: 1.3rem;
      top: 0.1rem;
      left: 3.4rem;
      width: 16.1rem;
      height: 1.3rem;
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
  max-width: 25rem;
  height: 5rem;
  margin-top: 2.7rem;
  margin-left: 5.3rem;
`;

const GraphStockValues = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  width: 12.5rem;
  height: 4.5rem;
  margin-top: 2.5rem;
  margin-right: 2rem;
`;

export const FontValues = styled(FontStyle)`
  color: ${(props) => (props.up ? "#79C300" : "#D64B45")};
`;

const GraphArea = ({
  companySymbol,
  companyName,
  companyLogo,
  latestPrice,
  change,
  changePercent,
  addToFavourites,
  isPending,
  apikey,
}) => {
  let upOrDown = Math.sign(change);

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
          <FontStyle symbol>{companySymbol}</FontStyle>
          <FontStyle>{companyName ? companyName : "COMPANY NAME"}</FontStyle>

          {/* <FontStyle>{companyName ? companyName : '(NOT FOUND)'}</FontStyle> */}
        </GraphName>
        <GraphStockValues>
          <img
            className="stockStatus"
            src={
              Boolean(!change)
                ? ""
                : upOrDown === -1 || upOrDown === -0
                ? graphdown
                : graphup
            }
            alt=""
          />
          <FontStyle symbol>
            {latestPrice && companyName ? `$${latestPrice}` : ""}
          </FontStyle>
          {upOrDown === -1 || upOrDown === -0 ? (
            <FontValues>
              {change && companyName ? `$${change} (${changePercent}%)` : ""}
            </FontValues>
          ) : (
            <FontValues up>
              {change && companyName ? `$${change} (${changePercent}%)` : ""}
            </FontValues>
          )}
        </GraphStockValues>
      </HeaderSpreader>

      <GraphChart apikey={apikey} companySymbol={companySymbol} />
    </GraphWrapper>
  );
};

export default GraphArea;

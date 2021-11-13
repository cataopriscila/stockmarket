// import React, { useState } from "react";
import { useState } from "react";
import styled, { css } from "styled-components";
import Card from "./Styled/Card";
import FontStyle from "./Styled/FontStyle";
import { FontValues } from "./GraphArea";
import graphup from "../../Images/Icons/icon-graph-up.svg";
import graphdown from "../../Images/Icons/icon-graph-down.svg";
import emptystar from "../../Images/Icons/icon-emptystar.svg";
import fullstar from "../../Images/Icons/icon-fullstar.svg";

import Image from "./Styled/Image";

export const ImageLogo = styled(Image)`
  border-radius: 50%;

  ${(props) =>
    props.recent
      ? css`
          width: 3.6rem;
          height: 3.6rem;
          border: 0.4rem solid #a9adb180;
        `
      : css`
          width: 4.5rem;
          height: 4.5rem;
          position: absolute;
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

const GeneralCard = (props) => {
  const { companySymbol, companyName, changePercent, addFromRecents, id } =
    props;
  let upOrDown = Math.sign(changePercent);

  const [isFavouriteStar, setIsFavouriteStar] = useState(false);

  const changeStar = (e) => {
    if (parseInt(e.target.id) === id) {
      setIsFavouriteStar(true);
    }
  };

  return (
    <Card onClick={changeStar} {...props}>
      <Image
        id={id}
        style={{ cursor: "pointer" }}
        src={isFavouriteStar ? fullstar : emptystar}
        alt="empty-star"
        onClick={addFromRecents}
      />

      <ImageLogo recent {...props} />
      <CompanyInfo>
        <FontStyle symbol>{companySymbol}</FontStyle>
        <FontStyle>{companyName}</FontStyle>
      </CompanyInfo>

      <CompanyValues>
        {upOrDown === -1 || upOrDown === -0 ? (
          <FontValues>{`${changePercent}%`}</FontValues>
        ) : (
          <FontValues up>{`+${changePercent}%`}</FontValues>
        )}
        <img
          src={upOrDown === -1 || upOrDown === -0 ? graphdown : graphup}
          alt="rate"
        />
      </CompanyValues>
    </Card>
  );
};

export default GeneralCard;

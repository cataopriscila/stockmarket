import fullstar from "../../Images/Icons/icon-fullstar.svg";
import Image from "./Styled/Image";
import HeaderWrapper from "./Styled/HeaderWrapper";
import SubTitle from "./Styled/SubTitle";
import FavouriteCard from "./FavouriteCard";
import { Fragment } from "react";

const UserList = ({ subtitle, favourites, removeFavourites }) => {

  return (
    <>
      <HeaderWrapper>
        <Image src={fullstar} alt="full-star" />
        <SubTitle>{subtitle}</SubTitle>
      </HeaderWrapper>
      {favourites.map((card, i) => (
        <Fragment key={i}>
          <FavouriteCard card={card} removeFavourites={removeFavourites} />
        </Fragment>
      ))}
    </>
  );
};

export default UserList;

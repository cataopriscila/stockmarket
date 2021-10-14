import React from "react";
import styled from "styled-components";
import BoardList from "./BoardList";
import UserProfile from "./UserProfile";

const SideBoardWrapper = styled.div`
  background: #ffffff;
  display: inline-block;
  width: 35.4rem;
  height: 72.9em;
  padding: 3.6rem 2rem;
  position: relative;
  z-index: 2;
`;

const SideBoard = ({favourites, removeFavourites, isDeleted, closeMessage}) => {
  return (
    <SideBoardWrapper>
      <UserProfile />
      <BoardList        
        subtitle="Favourite companies"
        favourites={favourites}
        removeFavourites={removeFavourites}
        isDeleted={isDeleted}
        closeMessage={closeMessage}
        
        />
    </SideBoardWrapper>
  );
};

export default SideBoard;

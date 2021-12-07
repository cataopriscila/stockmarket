import React from "react";
import styled from "styled-components";
import UserList from "./UserList";
import UserProfile from "./UserProfile";

const UserBoardWrapper = styled.div`
  background: #ffffff;
  display: inline-block;
  width: 35.4rem;
  height: 72.9em;
  padding: 3.6rem 2rem;
  position: relative;
  z-index: 2;

  @media(min-width:1440px)
    {   padding: 3.6rem 4rem;       
    }
`;

const UserBoard = ({favourites, removeFromFavourites, unfavouriteRecents}) => {
  return (
    <UserBoardWrapper>
      <UserProfile />
      <UserList        
        subtitle="Favourite companies"
        favourites={favourites}        
        removeFromFavourites={removeFromFavourites} 
        unfavouriteRecents={unfavouriteRecents}              
        />
    </UserBoardWrapper>
  );
};

export default UserBoard;

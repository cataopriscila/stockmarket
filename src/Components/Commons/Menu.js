import React from "react";
import styled from "styled-components";
import logo from "../../Images/Icons/logo.svg";
import home from "../../Images/Icons/icon-home.svg";
import Image from "./Styled/Image";
import { Link } from "react-router-dom";

const MenuWrapper = styled.nav`
  display: block;
  background-color: white;
  position: relative;
  z-index: 2;
`;

const Menu = () => {
  return (
    <MenuWrapper>
      <Link to="/">
        <Image menu src={logo} alt="" />
      </Link>
      <Link to="/home">
        <Image menu src={home} alt="" />
      </Link>
    </MenuWrapper>
  );
};

export default Menu;

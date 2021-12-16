import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import { SearchbarWrapper } from "./SearchBar";
import Button from "./Styled/Button";

import Input from "./Styled/Input";

const LoginWrapper = styled.div`
  
  align-self: center;  
  margin: 0 auto;
  padding: 2rem 4rem;
  border: 2px solid rgba(0, 71, 187, 0.1);
  border-radius: 0.8rem;  
  background: rgba(0, 71, 187, 0.3);
`;

const Login = ({setName}) => {

    const [input, setInput] = useState('');    

   
  return (
    <LoginWrapper>
      <Header title="Login" />
      <SearchbarWrapper>
        <div style={{ display: "block" }}>
          <Input type="text" placeholder="Enter your name" onChange={(e)=> setInput(e.target.value)} value={input} />
          <Link to="/home">
             <Button type="button" onClick={() => setName(input)}>Login</Button> 
          </Link>
          
        </div>
      </SearchbarWrapper>
    </LoginWrapper>
  );
};

export default Login;

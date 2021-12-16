import React from "react";
import { createGlobalStyle } from "styled-components";
import Access from "./Pages/Access";
import Home from "./Pages/Home";
import { BrowserRouter, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { useState } from "react";

// require("dotenv").config();

const GlobalStyle = createGlobalStyle`
  body{    
    min-height: 100vh;           
    margin: 0;
    color: black;      
    font-weight: 400;    
    font-family: 'Raleway', sans-serif;

    @media(min-width:1440px) {
      font-size: 12px;      
    }
  }
`;

function App() {
  const [name, setName] = useState('');

  // const toSetName = (user) => {
  //   setName(user);
  // }

  return (
    <>
      <GlobalStyle />      
      <BrowserRouter>
      <Switch>
      <Route path="/home">
         <Home username={name}/>
      </Route>
      <Route path="/">        
      <Access setName={setName} />
      </Route>
      

     
      

      </Switch>
        
      </BrowserRouter>
      
    </>
  );
}

export default App;
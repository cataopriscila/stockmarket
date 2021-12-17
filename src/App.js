import React from "react";
import { createGlobalStyle } from "styled-components";
import Access from "./Pages/Access";
import Home from "./Pages/Home";
import { BrowserRouter, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { useState } from "react";
import PageLayout from "./Components/Commons/PageLayout";
import Menu from "./Components/Commons/Menu";

// require("dotenv").config();

const GlobalStyle = createGlobalStyle`

html {
  font-size: 10px; 

  @media(min-width:1440px) {
      font-size: 11px;      
    }   
}

  body{    
    min-height: 100vh;           
    margin: 0;
    color: black;      
    font-weight: 400;    
    font-family: 'Raleway', sans-serif;

    
  }
`;

function App() {
  const [name, setName] = useState("");
  
  return (
    <>
      <GlobalStyle />
      <PageLayout>      
        <BrowserRouter>
        <Menu />
        <Switch>
          <Route path="/home">
            <Home username={name} />
          </Route>
          <Route path="/">
            <Access setName={setName} />
          </Route>
        </Switch>
      </BrowserRouter>
      </PageLayout>      
    </>
  );
}

export default App;
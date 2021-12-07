import React, { useState } from "react";
import axios from "axios";
import { createGlobalStyle } from "styled-components";
import Menu from "./Components/Commons/Menu";
import PageLayout from "./Components/Commons/PageLayout";
import DashBoard from "./Components/Commons/DashBoard";
import UserBoard from "./Components/Commons/UserBoard";
import Alert from "./Components/Alert";

require("dotenv").config();

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

const API_TOKEN = `${process.env.REACT_APP_API_KEY}`;

function App() {
  const [company, setCompany] = useState({});
  const [alert, setAlert] = useState("");
  const [alertDisplay, setAlertDisplay] = useState("none");
  const [favourites, setFavourites] = useState([]);

  const onSearchSubmit = async (symbol) => {
    try {
      const response = await axios.get(
        `https://cloud.iexapis.com/stable/stock/${symbol}/quote/latestprice?token=${API_TOKEN}`
      );
      setCompany(response.data);
    } catch (error) {
      setCompany(error.response);
      setAlert("Insert a valid NASDAQ symbol");
      setAlertDisplay("block");
    }
  };

  const goBack = () => {
    setAlert("");
    setAlertDisplay("none");
  };

  const addToFavourites = async () => {
    const { symbol, companyName, changePercent } = company;
    try {
      const response = await axios.get(
        `https://cloud.iexapis.com/stable/stock/${symbol}/logo?token=${API_TOKEN}`
      );

      if (changePercent) {
        if (favourites.some((obj) => obj.companyName === companyName)) {
          setAlert("Stock is already on your list of favourites");
          setAlertDisplay("block");
        } else {
          setFavourites([
            ...favourites,
            {
              logo: response.data.url,
              symbol,
              companyName,
              changePercent,
            },
          ]);
          console.log(favourites);
        }
      } else {
        setAlertDisplay("block");
        setAlert("Poor stock data. Insert another symbol");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromFavourites = (card) => {
    let favUpdate = favourites.filter((obj) => !(obj === card));
    setFavourites(favUpdate);
  };

  const addFromRecents = (card, e) => {
    const { companyName } = card;
    if (favourites.some((obj) => obj.companyName === companyName)) {
      e.preventDefault();
      setAlert("Stock is already on your list of favourites");
      setAlertDisplay("block");
    } else {
      setFavourites([...favourites, card]);
    }
  };

  return (
    <>
      <GlobalStyle />

      <Alert alert={alert} alertDisplay={alertDisplay} goBack={goBack} />
      <PageLayout>
        <Menu />
        <DashBoard
          company={company}
          onSearchSubmit={onSearchSubmit}
          addToFavourites={addToFavourites}
          addFromRecents={addFromRecents}
          apikey={API_TOKEN}
        />
        <UserBoard
          favourites={favourites}
          removeFromFavourites={removeFromFavourites}
        />
      </PageLayout>
    </>
  );
}

export default App;

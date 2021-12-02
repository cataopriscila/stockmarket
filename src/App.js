import React, { useEffect, useState } from "react";
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
      font-size: 220%;
    }
  }
`;

const API_TOKEN = `${process.env.REACT_APP_API_KEY}`;

function App() {
  const [company, setCompany] = useState({});
  const [alert, setAlert] = useState("");
  const [alertDisplay, setAlertDisplay] = useState("none");
  const [favourites, setFavourites] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);
  const [recents, setRecents] = useState([]);

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
          setAlert("Stock already on your list of favourites");
          setAlertDisplay("block");
        } else {
          setFavourites([
            ...favourites,
            {
              logo: response.data.url,
              symbol,
              companyName,
              changePercent,
              // id: favourites.length.toString(),
            },
          ]);
        }
      } else {
        setAlertDisplay("block");
        setAlert("Poor stock data. Insert another symbol");
      }
    } catch (error) {
      console.log(error);
    }   
  };


  const removeFavourites = (card) => {
    let favUpdate = favourites.filter((obj)=> !(obj === card));
    setFavourites(favUpdate);
    }  

  const closeMessage = () => {
    setIsDeleted(false);
  };

  const addFromRecents = (e) => {
    recents.forEach((value, i) => {
      if (parseInt(e.target.id) === i) {
        if (
          favourites.some((obj) => obj.companySymbol === value.companySymbol)
        ) {
          return false;
        } else {
          return favourites.push(value);
        }
      }
    });

    setFavourites(favourites);
    setCompany(Math.random());
  };

  useEffect(() => {
    let arrayOfSymbols = [
      "TSLA",
      "AAPL",
      "BABA",
      "MSFT",
      "SBUX",
      "FB",
      "DIS",
      "NFLX",
      "TWTR",
      "JNJ",
    ];

    return arrayOfSymbols.forEach((value, i) => {
      fetch(
        `https://cloud.iexapis.com/stable/stock/${value}/logo?token=${API_TOKEN}`
      )
        .then((response) => response.json())
        .then((data) => {
          let logo = { logo: data.url };
          fetch(
            `https://cloud.iexapis.com/stable/stock/${value}/quote/latestprice?token=${API_TOKEN}`
          )
            .then((response) => response.json())
            .then((data) => {
              let companyData = {
                companySymbol: value,
                companyName: data.companyName,
                changePercent: data.changePercent,
                id: `${i}`,
              };
              setRecents((prev) => prev.concat({ ...logo, ...companyData }));
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    });
  }, []);

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
          recents={recents}
          apikey={API_TOKEN}
        />
        <UserBoard
          favourites={favourites}
          removeFavourites={removeFavourites}
          isDeleted={isDeleted}
          closeMessage={closeMessage}
        />
      </PageLayout>
    </>
  );
}

export default App;

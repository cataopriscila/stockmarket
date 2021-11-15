import React, { useEffect, useState } from "react";
import axios from 'axios';
import { createGlobalStyle } from "styled-components";
import Menu from "./Components/Commons/Menu";
import PageLayout from "./Components/Commons/PageLayout";
import DashBoard from "./Components/Pages/DashBoard";
import SideBoard from "./Components/Commons/SideBoard";
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
  const [logo, setLogo] = useState('');
  const [company, setCompany] = useState({}); 
  const [alert, setAlert] = useState(''); 
  const [alertDisplay, setAlertDisplay] = useState(false);
  const [favourites, setFavourites] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);
  const [recents, setRecents] = useState([]);

  const onSearchSubmit = async (symbol) => {
    try {
      const response = await axios.get(`https://cloud.iexapis.com/stable/stock/${symbol}/quote/latestprice?token=${API_TOKEN}`);
      setCompany(response.data);
      console.log(response.data);

    } catch (error) {      
      setCompany(error.response);
    }   
  }

  const goBack = () => {
    setAlert('');
    setAlertDisplay(false);
  } 

  const addToFavourites = async () => {     
    const {symbol, companyName, changePercent} = company;
    try {
      const response = await axios.get(`https://cloud.iexapis.com/stable/stock/${company.symbol}/logo?token=${API_TOKEN}`);      
      setLogo(response.data.url); 
      if(changePercent){
          if (favourites.some((obj) => obj.companyName === companyName)) {
            setAlertDisplay(true);
            setAlert('Stock already on your list of favourites')
          } else {
            setFavourites([...favourites, {logo, symbol, companyName, changePercent, id: favourites.length.toString()}]);
          }
      } else {
          setAlertDisplay(true);
          setAlert('Poor stock data. Find another symbol')
      }
    } catch (error) {      
      console.log(error);
    }     
  };

  const removeFavourites = (e) => {
    if (favourites.some((obj) => e.target.id === obj.id)) {
      favourites.splice(e.target.id, 1);
      let updated = favourites.map((obj, i) =>
        Object.assign({}, obj, { id: `${i}` })
      );
      setFavourites(updated);      
      setIsDeleted(true);
    }
  };

  const closeMessage = () => {
    setIsDeleted(false);
  };

  const addFromRecents = (e) => {        
    recents.forEach((value, i) => {
      if (parseInt(e.target.id) === i) { 
            if(favourites.some((obj) => obj.companySymbol === value.companySymbol)) {
            return false;          
          } else {
            return favourites.push(value);
          }          
        }     
    })

    setFavourites(favourites);
    setCompany(Math.random());   
    
   
  };
 
  useEffect(() => {    
    let arrayOfSymbols = ["TSLA", 'AAPL', "BABA",'MSFT', 'SBUX', 'FB', 'DIS', 'NFLX','TWTR', 'JNJ'];

    return arrayOfSymbols.forEach((value, i) => {
      fetch(
        `https://cloud.iexapis.com/stable/stock/${value}/logo?token=${API_TOKEN}`
      )
        .then((response) => response.json())
        .then((data) => {
          let logo = {logo: data.url};
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
      <Alert alert={alert}
             alertDisplay={alertDisplay}
             goBack={goBack}
      />
      <PageLayout>
        <Menu/>
        <DashBoard
          company={company}          
          onSearchSubmit={onSearchSubmit}          
          addToFavourites={addToFavourites}
          addFromRecents={addFromRecents}
          recents={recents}          
          apikey={API_TOKEN}          
        />
        <SideBoard
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

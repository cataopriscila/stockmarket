import React, { useEffect, useState } from "react";
import axios from 'axios';
import { createGlobalStyle } from "styled-components";
import Menu from "./Components/Commons/Menu";
import PageLayout from "./Components/Commons/PageLayout";
import DashBoard from "./Components/Pages/DashBoard";
import SideBoard from "./Components/Commons/SideBoard";

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
  const [logo, setLogo] = useState("Logo");
  const [company, setCompany] = useState("");
  const [companySymbol, setCompanySymbol] = useState("");
  const [companyName, setCompanyName] = useState("COMPANY NAME");
  const [latestPrice, setLatestPrice] = useState("");
  const [change, setChange] = useState(null);
  const [changePercent, setChangePercent] = useState(null);
  const [favourites, setFavourites] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);
  const [recents, setRecents] = useState([]);

  const onSearchSubmit = async (symbol) => {
    const response = await axios.get(`https://cloud.iexapis.com/stable/stock/${symbol}/quote/latestprice?token=${API_TOKEN}`)

    setCompany(response.data);
    console.log(response.data);
    // setCompanyName(response.data.companyName);
    // setCompanySymbol(response.data.symbol);
    // setLatestPrice(response.data.latestPrice);
    // setChange(response.data.change);
    // setChangePercent(response.data.changePercent);              
        
    }


  const onButtonClick = () => {
    
           
    setLatestPrice("");
    setChange("");
    setChangePercent("");

    fetch(
      `https://cloud.iexapis.com/stable/stock/${company}/logo?token=${API_TOKEN}`
    )
      .then((response) => response.json())
      .then((data) => {
        setLogo(data.url);
      })
      .catch((err) => console.log(err));

    fetch(
      `https://cloud.iexapis.com/stable/stock/${company}/quote/latestprice?token=${API_TOKEN}`
    )
      .then((response) => response.json())
      .then((data) => { 
        console.log(data.companyName);       
        setCompanyName(data.companyName);
        setCompanySymbol(data.symbol);
        setLatestPrice(data.latestPrice);
        setChange(data.change);
        setChangePercent(data.changePercent);
      })
      .catch((err) => {
        console.log(err);
        setCompanySymbol("NASDAQ symbols only");
        setCompanyName("(company not found)");
      });
  };

  const addToFavourites = (e) => { 
      
    if (companyName === 'COMPANY NAME') {
      e.preventDefault();
    } else if ( companyName === "(company not found)" || changePercent === null) {
        setCompanyName('Not found');
        setCompanySymbol('');
        e.preventDefault();
    } else if (companySymbol === "NASDAQ symbols only" || companyName === null) {
      setCompanySymbol("NASDAQ symbols only");
      setCompanyName('(not found)');
      setChangePercent('');
      setLatestPrice('');

    } else if (favourites.some((obj) => obj.companyName === companyName)) {
      setCompanySymbol(`It's already on your list!`);
      setCompanyName(null);
      
    } else {
      favourites.push({
        logo,
        companySymbol,
        companyName,
        changePercent,
        id: favourites.length.toString(),
      });
      setFavourites(favourites);
      setCompany('');
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
      <PageLayout>
        <Menu/>
        <DashBoard
          company={company}
          companySymbol={companySymbol}
          companyName={companyName}
          latestPrice={latestPrice}
          change={change}
          changePercent={changePercent}
          onSearchSubmit={onSearchSubmit}
          onButtonClick={onButtonClick}
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

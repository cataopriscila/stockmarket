import React, { useEffect, useState } from "react";
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
    ${"" /* ${props => props.theme.fontColor}; */}    
    ${"" /* ${props => props.theme.textColor}; */}    
    font-weight: 400;    
    font-family: 'Raleway', sans-serif;

    @media(min-width:1440px)
    {
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
  const [changePercent, setChangePercent] = useState("");
  const [favourites, setFavourites] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);
  const [recents, setRecents] = useState([]);

  const onSearchChange = (e) => {
    setCompany(e.target.value);
  };

  const onEnterPress = (event) => {        
    if (event.which === 13) {
        onButtonClick();
    }        
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
        setCompanyName(data.companyName);
        setCompanySymbol(data.symbol);
        setLatestPrice(data.latestPrice);
        setChange(data.change);
        setChangePercent(data.changePercent);
      })
      .catch((err) => {
        console.log(err);
        setCompanySymbol("NOT FOUND");
        setCompanyName("(try a valid symbol)");
      });
  };

  const addToFavourites = (e) => {
    if (companyName === "COMPANY NAME") {
      e.preventDefault();
    } else if (companySymbol === "NOT FOUND" || companyName === null) {
      setCompanySymbol("Choose a valid company!");
    } else if (favourites.some((obj) => obj.companyName === companyName || `It's already on your list!`)) {
      setCompanySymbol(`It's already on your list!`);
    } else {
      favourites.push({
        logo,
        companySymbol,
        companyName,
        changePercent,
        id: favourites.length.toString(),
      });
      setFavourites(favourites);
      setCompany("");
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
    console.log('favourites after add from recents',favourites);
   
  };

  // {
  //   logo,
  //   companySymbol,
  //   companyName,
  //   changePercent,
  //   id: favourites.length.toString(),
  // }

  useEffect(() => {
    //,'MSFT', 'SBUX', 'FB', 'TSLA', 'BABA','TWTR'
    let arrayOfSymbols = ["TSLA", "BABA"];

    arrayOfSymbols.forEach((value, i) => {
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
        <Menu />
        <DashBoard
          companySymbol={companySymbol}
          companyName={companyName}
          latestPrice={latestPrice}
          change={change}
          changePercent={changePercent}
          onSearchChange={onSearchChange}
          onButtonClick={onButtonClick}
          addToFavourites={addToFavourites}
          addFromRecents={addFromRecents}
          recents={recents}
          onEnterPress={onEnterPress}
          
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

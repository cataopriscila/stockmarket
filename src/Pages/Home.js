import React, { useState } from "react";
import iex from "../api/iex";
import Menu from "../Components/Commons/Menu";
import PageLayout from "../Components/Commons/PageLayout";
import DashBoard from "../Components/Commons/DashBoard";
import UserBoard from "../Components/Commons/UserBoard";
import Alert from "../Components/Commons/Alert";

const Home = ({username}) => {
  const [company, setCompany] = useState({});
  const [alert, setAlert] = useState("");
  const [alertDisplay, setAlertDisplay] = useState("none");
  const [favourites, setFavourites] = useState([]);

  const onSearchSubmit = async (symbol) => {
    try {
      const response = await iex.get(`/${symbol}/quote/latestprice`);
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
      const response = await iex.get(`/${symbol}/logo`);

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
      <Alert alert={alert} alertDisplay={alertDisplay} goBack={goBack} />
      <PageLayout>
        <Menu />
        <DashBoard
          company={company}
          onSearchSubmit={onSearchSubmit}
          addToFavourites={addToFavourites}
          addFromRecents={addFromRecents}
        />
        <UserBoard
          username={username}
          favourites={favourites}
          removeFromFavourites={removeFromFavourites}
        />
      </PageLayout>
    </>
  );
};

export default Home;

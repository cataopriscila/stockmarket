import {
  CHANGE_SEARCHFIELD,
  REQUEST_COMPANY_INFO_PENDING,
  REQUEST_COMPANY_INFO_SUCCESS,
  REQUEST_COMPANY_INFO_FAILED,
  REQUEST_COMPANY_LOGO_PENDING,
  REQUEST_COMPANY_LOGO_SUCCESS,
  REQUEST_COMPANY_LOGO_FAILED,
  REQUEST_RECENT_COMPANIES_PENDING,
  REQUEST_RECENT_COMPANIES_SUCCESS,
  REQUEST_RECENT_COMPANIES_FAILED,
  ADD_FAVOURITES
} from "./constants";

import store from "../index";

const API_TOKEN = `${process.env.REACT_APP_API_KEY}`;

export const setSearchField = (text) => ({
  type: CHANGE_SEARCHFIELD,
  payload: text,
});

export const setCompanyInfo = () => (dispatch) => {
  const input = store.getState().searchCompanies.searchField;
  dispatch({ type: REQUEST_COMPANY_INFO_PENDING });
  fetch(
    `https://cloud.iexapis.com/stable/stock/${input}/quote/latestprice?token=${API_TOKEN}`
  )
    .then((response) => response.json())
    .then((company) => {
      dispatch({ type: REQUEST_COMPANY_INFO_SUCCESS, payload: company }, {type: ADD_FAVOURITES, payload: company});
    })
    .catch((error) =>
      dispatch({ type: REQUEST_COMPANY_INFO_FAILED, payload: error })
    );
};

export const setCompanyLogo = () => (dispatch) => {
  const input = store.getState().searchCompanies.searchField;
  dispatch({ type: REQUEST_COMPANY_LOGO_PENDING });

  fetch(
    `https://cloud.iexapis.com/stable/stock/${input}/logo?token=${API_TOKEN}`
  )
    .then((response) => response.json())
    .then((companyLogo) => {
      dispatch({ type: REQUEST_COMPANY_LOGO_SUCCESS, payload: companyLogo });
    })
    .catch((error) =>
      dispatch({ type: REQUEST_COMPANY_LOGO_FAILED, payload: error })
    );
};

export const setRecentCompanies = () => (dispatch) => { 
  // 'SBUX', 'DIS', 'NFLX','TWTR', 'JNJ', "AAPL", "BABA", 

  const arrayOfSymbols = ["TSLA",'MSFT', 'FB'];

  dispatch({ type: REQUEST_RECENT_COMPANIES_PENDING });

  arrayOfSymbols.forEach((value, i) => {
    return fetch(
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

            dispatch({
              type: REQUEST_RECENT_COMPANIES_SUCCESS,
              payload: { ...logo, ...companyData },
            });
          })
          .catch((error) =>
            dispatch({ type: REQUEST_RECENT_COMPANIES_FAILED, payload: error })
          );
      })
      .catch((error) =>
        dispatch({ type: REQUEST_RECENT_COMPANIES_FAILED, payload: error })
      );
  });
};

export const setFavourites = (array) => {  
  return ({
  type: ADD_FAVOURITES,
  payload: array,
  });
} 
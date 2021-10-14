import {
  CHANGE_SEARCHFIELD,
  REQUEST_COMPANY_INFO_PENDING,
  REQUEST_COMPANY_INFO_SUCCESS,
  REQUEST_COMPANY_INFO_FAILED,
  REQUEST_COMPANY_LOGO_PENDING,
  REQUEST_COMPANY_LOGO_SUCCESS,
  REQUEST_COMPANY_LOGO_FAILED,
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
        dispatch({ type: REQUEST_COMPANY_INFO_SUCCESS, payload: company});
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
        dispatch({type: REQUEST_COMPANY_LOGO_SUCCESS, payload: companyLogo})
      })
      .catch((error) => dispatch({ type: REQUEST_COMPANY_LOGO_FAILED, payload: error }));
};

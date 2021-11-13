import {
  CHANGE_SEARCHFIELD,
  ADD_FAVOURITES,
  REQUEST_COMPANY_INFO_PENDING,
  REQUEST_COMPANY_INFO_SUCCESS,
  REQUEST_COMPANY_INFO_FAILED,
  REQUEST_COMPANY_LOGO_PENDING,
  REQUEST_COMPANY_LOGO_SUCCESS,
  REQUEST_COMPANY_LOGO_FAILED,
  REQUEST_RECENT_COMPANIES_PENDING,
  REQUEST_RECENT_COMPANIES_SUCCESS,
  REQUEST_RECENT_COMPANIES_FAILED,
} from "./constants";

const initialSearch = {
  searchField: "",
};

export const searchCompanies = (state = initialSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

const initialSearchedCompany = {
  isPending: false,
  companyInfo: {},  
  companyName: "COMPANY NAME",
  companySymbol: "",
  latestPrice: "",
  change: null,
  changePercent: null,
  error: "",
  favouriteCompanies: []
};

export const requestCompanyInfo = (
  state = initialSearchedCompany,
  action = {}
) => {
  switch (action.type) {
    case REQUEST_COMPANY_INFO_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_COMPANY_INFO_SUCCESS:
      return Object.assign({}, state, {
        companyInfo: action.payload,        
        companyName: action.payload.companyName,
        companySymbol: action.payload.companySymbol,
        latestPrice: action.payload.latestPrice,
        change: action.payload.change,
        changePercent: action.payload.changePercent,
        isPending: false,
      });
    case REQUEST_COMPANY_INFO_FAILED:
      return {
        ...state,
        error: action.payload,
        companyLogo: '',
        companyName: "(company not found)",
        companySymbol: "NASDAQ symbols only",
        isPending: false,
      };
      case ADD_FAVOURITES: 
      return Object.assign({}, state, {favouritesCompanies: 
        [...state.favouriteCompanies, {                
        companyName: action.payload.companyName,
        companySymbol: action.payload.companySymbol,        
        change: action.payload.change,
        changePercent: action.payload.changePercent,        
      }]        
      });
    default:
      return state;
  }
};

const initialSearchedLogo = {
  isPendingLogo: false, 
  companyLogo: '',  
  errorLogo: "",
};

export const requestCompanyLogo = (
  state = initialSearchedLogo,
  action = {}
) => {
  switch (action.type) {
    case REQUEST_COMPANY_LOGO_PENDING:
      return Object.assign({}, state, { isPendingLogo: true});
    case REQUEST_COMPANY_LOGO_SUCCESS:
      return Object.assign({}, state, {
        
        companyLogo: action.payload.url,        
        isPendingLogo: false,
      });
    case REQUEST_COMPANY_LOGO_FAILED:
      return {
        ...state,
        errorLogo: action.payload,        
        isPendingLogo: false,
      };
    default:
      return state;
  }
};


  const initialRecentCompanies = {    
    isPending: false,
    recentCompanies: [],
    error: "",
  };

  export const requestRecentCompanies = (state = initialRecentCompanies, action = {}) => {
    switch (action.type) {
      case REQUEST_RECENT_COMPANIES_PENDING:
        return Object.assign({}, state, {isPending: true });
      case REQUEST_RECENT_COMPANIES_SUCCESS:
        return {...state, recentCompanies: [ ...state.recentCompanies, action.payload], isPending: false};        
      case REQUEST_RECENT_COMPANIES_FAILED:
        return {...state, error: action.payload, isPending: false};  
      default:
        return state;
    }
  };


  
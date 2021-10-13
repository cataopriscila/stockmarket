import {
    CHANGE_SEARCHFIELD,
    // CLICK_COUNTER_BUTTON,
    // REQUEST_ROBOTS_PENDING,
    // REQUEST_ROBOTS_SUCCESS,
    // REQUEST_ROBOTS_FAILED,
  } from "./constants";
  
  const initialStateSearch = {
    searchField: '',
  };
  
  export const searchCompanies = (state = initialStateSearch, action = {}) => {
    switch (action.type) {
      case CHANGE_SEARCHFIELD:
        return {...state, searchField: action.payload};
  
      default:
        return state;
    }
  };
  
  // const initialCounter = {
  //   counter: 0,
  // };
  
  // export const incrementCounter = (state = initialCounter, action = {}) => {
  //   switch (action.type) {
  //     case CLICK_COUNTER_BUTTON:
  //       return { ...state, counter: state.counter + 1 };
  
  //     default:
  //       return state;
  //   }
  // };
  
  // const initialStateRobots = {
  //   isPending: false,
  //   robots: [],
  //   error: "",
  // };
  
  // export const requestRobots = (state = initialStateRobots, action = {}) => {
  //   switch (action.type) {
  //     case REQUEST_ROBOTS_PENDING:
  //       return Object.assign({}, state, { isPending: true });
  //     case REQUEST_ROBOTS_SUCCESS:
  //       return Object.assign({}, state, {
  //         robots: action.payload,
  //         isPending: false,
  //       });
  //     case REQUEST_ROBOTS_FAILED:
  //       return { ...state, error: action.payload, isPending: false };
  
  //     default:
  //       return state;
  //   }
  // };
  
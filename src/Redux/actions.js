import {
    CHANGE_SEARCHFIELD,
    // CLICK_COUNTER_BUTTON,
    // REQUEST_ROBOTS_PENDING,
    // REQUEST_ROBOTS_SUCCESS,
    // REQUEST_ROBOTS_FAILED,
  } from "./constants";
  
  export const setSearchField = (text) => ({
    type: CHANGE_SEARCHFIELD,
    payload: text,
  });
  
  // export const setCounter = (numberofclicks) => ({
  //   type: CLICK_COUNTER_BUTTON,
  //   payload: numberofclicks,
  // });
  
  // export const requestRobots = () => (dispatch) => {
  //   dispatch({ type: REQUEST_ROBOTS_PENDING });
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((users) => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: users }))
  //     .catch((error) => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error })
  //     );
  // };
  
import { REGISTER_USER, LOGIN_USER } from "../actions/types";

const initailState = {
  user: {},
  isAuthenticated: false,
};


export default (state = initailState, action) => {
  let { type, payload } = action;
  switch (type) {
    case REGISTER_USER:
      return {
         ...state
      }
    
    case LOGIN_USER:
      return {
        ...state,
        user:payload,
        isAuthenticated: true,
      };
    default:
      return state;
  }
};

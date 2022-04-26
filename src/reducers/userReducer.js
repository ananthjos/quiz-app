import { REGISTER_USER, LOGIN_USER,SAVE_TEST } from "../actions/types";

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
      case SAVE_TEST:
      return {
         ...state,
      }
    default:
      return state;
  }
};

import { REGISTER_USER, LOGIN_USER } from "../actions/types";

const initailState = {
  user: null,
  token: localStorage.getItem("token"),
  isAuthenticated: false,
};


export default (state = initailState, action) => {
  let { type, payload } = action;
  switch (type) {
    case REGISTER_USER:
    case LOGIN_USER:
      localStorage.setItem("token", payload.data.Token);
      return {
        ...state,
        user:payload.data,
        token:payload.data.Token,
        isAuthenticated: true,
      };
    default:
      return state;
  }
};

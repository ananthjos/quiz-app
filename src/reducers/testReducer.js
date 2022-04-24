import { GET_TEST_DETAILS } from "../actions/types";

const initailState ={
   test:[]
}

export default (state=initailState,action)=>{
  let { type, payload } = action;
  switch (type) {
    case GET_TEST_DETAILS:
      return {
        ...state,
         test:payload
      };
    default:
      return state;
  }
}
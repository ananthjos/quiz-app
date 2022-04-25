import { GET_TEST_DETAILS ,TOTAL_CHOICES,EVALUATE_TEST} from "../actions/types";

const initailState ={
   test:[],
   result :0,
   choices:[]
}

export default (state=initailState,action)=>{
  let { type, payload } = action;
  switch (type) {
    case GET_TEST_DETAILS:
      return {
        ...state,
         test:payload
      };
      case TOTAL_CHOICES:
        return {
          ...state,
          choices:payload
        }
        case EVALUATE_TEST :
          return {
            ...state,
            result:payload
          }
    default:
      return state;
  }
}
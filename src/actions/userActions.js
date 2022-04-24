import {REGISTER_USER,LOGIN_USER,LOGOUT} from './types';


const url = "http://restapi.adequateshop.com/api/authaccount";


// API call to register a user
export const  registerUser = (user)=>async(dispatch)=>{
  try {
     let response = await fetch(`${url}/registration`, {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify(user),
     });
     let data = await response.json();
     dispatch({type:REGISTER_USER,payload:data})
  } catch (error) {
    console.log(error);
  }
}

// API call to login a user
export const loginUser = (user) => async (dispatch) => {
  try {
    let response = await fetch(`${url}/login`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(user)});
    let data = await response.json();
    dispatch({ type: REGISTER_USER, payload: data });
  } catch (error) {
    console.log(error);
  }
}; 


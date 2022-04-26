import {REGISTER_USER,LOGIN_USER,LOGOUT,SAVE_TEST} from './types';




const url = "http://localhost:4000";
// API call to register a user
export const  registerUser = (user)=>async(dispatch)=>{
   let response = await fetch(`${url}/users`,{method:'POST',headers:{
     'Content-Type':'application/json',body:JSON.stringify(user)
   }})

   let data = await response.json();
   dispatch({type:REGISTER_USER,payload:data});
}

// API call to login a user
export const loginUser = (userId) => async (dispatch) => {
 
    let response = await fetch(`${url}/users/${userId}`);
    let data = await response.json();
    if(data.id){
      dispatch({ type: LOGIN_USER, payload: data });
    }else{
      alert('Please login with Proper credentials');
    }
}; 

// API Call to Save user Test Details
export const saveTestDetails = (user) => async (dispatch) => {
  let response = await fetch(`${url}/users/${user.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: user.id,
      userName: user.userName,
      email: user.email,
      password: user.password,
      testTaken: user.testTaken,
    }),
  });
}; 
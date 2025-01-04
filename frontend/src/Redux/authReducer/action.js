import { USER_LOADING } from "../actionTypes";
import axios from "axios";

const apiUrl = process.env.REACT_APP_SAREGAMA_API_URL;



export const usersignup = (payload)=> (dispatch)=>{
   
    dispatch({type:USER_LOADING})
    return axios.post(`${apiUrl}/users/register`,payload)
}

export const userlogin = (data)=> (dispatch)=>{
  
    dispatch({type:USER_LOADING})
    return axios.post(`${apiUrl}/users/login`,data)
}


export const userlogout = (token) => (dispatch) => {
    dispatch({ type: USER_LOADING });

    return axios.get(`${apiUrl}/users/logout`, {
        headers: {
            "Authorization": `Bearer ${token}`,  // Pass the token as a Bearer token
        },
    });
};


export const userforgot = (data)=> (dispatch)=>{
   
    dispatch({type:USER_LOADING})
    return axios.post(`${apiUrl}/users/forgot`,data);
}

export const usereset = (token,id,data)=> (dispatch)=>{
    dispatch({type:USER_LOADING})
    return axios.post(`${apiUrl}/users/resetpassword/${id}/${token}`,data);
}
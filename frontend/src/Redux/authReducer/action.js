import { USER_LOADING } from "../actionTypes";
import axios from "axios";

export const usersignup = (payload)=> (dispatch)=>{
    // console.log(payload,"Payloadf")
    dispatch({type:USER_LOADING})
    return axios.post("https://modern-plum-overcoat.cyclic.app/users/register",payload)
}

export const userlogin = (data)=> (dispatch)=>{
    console.log(data)
    dispatch({type:USER_LOADING})
    return axios.post("https://modern-plum-overcoat.cyclic.app/users/login",data)
}


export const userlogout = (token) => (dispatch)=> {
    dispatch({type:USER_LOADING});

    return axios.get("https://modern-plum-overcoat.cyclic.app/users/logout",{
        headers:{
            "Authorization":token
        }})
}


export const userforgot = (data)=> (dispatch)=>{
    // console.log(data)
    dispatch({type:USER_LOADING})
    return axios.post("https://modern-plum-overcoat.cyclic.app/users/forgot",data);
}

export const usereset = (token,id,data)=> (dispatch)=>{
    dispatch({type:USER_LOADING})
    return axios.post(`https://modern-plum-overcoat.cyclic.app/users/resetpassword/${id}/${token}`,data);
}
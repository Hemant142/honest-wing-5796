import { USER_LOADING } from "../actionTypes";
import axios from "axios";

export const usersignup = (data)=> (dispatch)=>{
    dispatch({type:USER_LOADING})
    return axios.post("http://localhost:8080/users/register",data);
}

export const userlogin = (data)=> (dispatch)=>{
    dispatch({type:USER_LOADING})
    return axios.post("http://localhost:8080/users/login",data);
}




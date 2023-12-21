import axios from "axios"
import { DELETE_FAVORITE_SONG_REQUEST_SUCCESS, FAVORITE_SONG_REQUEST, FAVORITE_SONG_REQUEST_FAIL, FAVORITE_SONG_REQUEST_SUCCESS, POST_FAVORITE_SONG_REQUEST_SUCCESS, UPDATE_FAVORITE_TO_EMPTY } from "./ActionType"
import Cookies from "js-cookie";
const BaseURL= "https://modern-plum-overcoat.cyclic.app/favorite"
const token = Cookies.get("login_token");
console.log({Cookiestoken:token})
export const GetAllFavoriteSong=(paramObj)=>async dispatch=>{
try {
    dispatch({type:FAVORITE_SONG_REQUEST})
   return await axios.get(`${BaseURL}`,{headers:{Authorization:token}}).then(res=>{
// console.log({CartRes:res});
dispatch({type:FAVORITE_SONG_REQUEST_SUCCESS,payload:res.data?.FavoriteSong})
return res.data
    }).catch(error=>{
        // console.log({CartError:error})
        dispatch({type:FAVORITE_SONG_REQUEST_FAIL})
    })
} catch (error) {
   dispatch({type:FAVORITE_SONG_REQUEST_FAIL})
}
}

export const AddFavoriteSong=(payload)=>async dispatch=>{
try {
    dispatch({type:FAVORITE_SONG_REQUEST})
    return await axios.post(`${BaseURL}/add`,payload,{headers:{Authorization:token}}).then(res=>{
    dispatch({type:POST_FAVORITE_SONG_REQUEST_SUCCESS})
    console.log({res})
    return res.data
    }).catch(err=>{
        dispatch({type:FAVORITE_SONG_REQUEST_FAIL})
    })
    
} catch (error) {
    dispatch({type:FAVORITE_SONG_REQUEST_FAIL})
}
}



export const DeletFavoriteSong=(id)=>async dispatch=>{
    try {
        dispatch({type:FAVORITE_SONG_REQUEST})
        return await axios.delete(`${BaseURL}/delete/${id}`,{headers:{Authorization:token}}).then(res=>{
        dispatch({type:DELETE_FAVORITE_SONG_REQUEST_SUCCESS})
        return res.data
        }).catch(err=>{
            dispatch({type:FAVORITE_SONG_REQUEST_FAIL})
        })
        
    } catch (error) {
        dispatch({type:FAVORITE_SONG_REQUEST_FAIL})
    }
    }

    export const UpdateSongEmpty=()=> async dispatch=>{
        dispatch({type:UPDATE_FAVORITE_TO_EMPTY})
    }
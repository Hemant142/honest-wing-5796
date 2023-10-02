import { DELETE_FAVORITE_SONG_REQUEST_SUCCESS, FAVORITE_SONG_REQUEST, FAVORITE_SONG_REQUEST_FAIL, FAVORITE_SONG_REQUEST_SUCCESS, POST_FAVORITE_SONG_REQUEST_SUCCESS, UPDATE_FAVORITE_TO_EMPTY } from "./ActionType"

const initialState={
    isLoading:false,
    FavoriteSongData:[],
    isError:false
}

export const Reducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case FAVORITE_SONG_REQUEST : return {...state,isLoading:true}
        case FAVORITE_SONG_REQUEST_SUCCESS : return {...state,isLoading:false,FavoriteSongData:payload}
        case FAVORITE_SONG_REQUEST_FAIL : return {...state,isLoading:false,FavoriteSongData:[],isError:true}
        case POST_FAVORITE_SONG_REQUEST_SUCCESS : return {...state,isLoading:false,isError:false}
        case DELETE_FAVORITE_SONG_REQUEST_SUCCESS : return {...state,isLoading:false,isError:false}
        case UPDATE_FAVORITE_TO_EMPTY : return {...state,isLoading:false,isError:false,FavoriteSongData:[]}
        default: return state
           
    }
}
import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import thunk from "redux-thunk"
import { reducer as authReducer } from "./authReducer/reducer"
import { Reducer as FavoriteSongReducer } from "./FavoriteSongReducer/Reducer"


const rootReducer = combineReducers({
    authReducer,FavoriteSongReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))
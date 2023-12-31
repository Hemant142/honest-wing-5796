import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'
import Browse from '../Pages/Browse'
// import MyFavorite from '../Pages/MyFavorite'
import ForgotPass from '../Pages/ForgotPass'

import Logout from "../Pages/logout"

import MyFavoriteMain from '../Pages/MyFavoriteMain'
import ResetPass from '../Pages/ResetPass'

import Songs from '../Pages/Songs'
import Browser from '../Components/browser'

import PrivateRoute from './PrivateRoute'



export default function AllRoutes() {

  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            {/* <Route path='/' element={<Browser/>} /> */}
            <Route path='/login' element={<Login/>}/>
          <Route path='/logout' element={<Logout/>}/>
          <Route path="/reset_password/:id/:token" element={<ResetPass/>}></Route>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/browse' element={<Browse/>}/>
            <Route path='/myfavorite' element={
              <PrivateRoute>
            <MyFavoriteMain/>
              </PrivateRoute>
            }/>
            <Route path="/forgot_password" element={<ForgotPass />}></Route>
            <Route path='/songs' element={<Songs/>}></Route>
        </Routes>
    </div>
  )
}

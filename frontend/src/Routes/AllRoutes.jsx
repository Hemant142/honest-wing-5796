import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'
import Browse from '../Pages/Browse'
import MyFavorite from '../Pages/MyFavorite'
import ForgotPass from '../Pages/ForgotPass'
import Logout from "../Pages/logout"

export default function AllRoutes() {


   
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
          <Route path='/logout' element={<Logout/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/browse' element={<Browse/>}/>
            <Route path='/myfavorite' element={<MyFavorite/>}/>
            <Route path="/forgot_password" element={<ForgotPass />}></Route>
        </Routes>
    </div>
  )
}

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'
import Browse from '../Pages/Browse'
import MyFavorite from '../Pages/MyFavorite'

export default function AllRoutes() {


   
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/browse' element={<Browse/>}/>
            <Route path='/myfavorite' element={<MyFavorite/>}/>
        </Routes>
    </div>
  )
}

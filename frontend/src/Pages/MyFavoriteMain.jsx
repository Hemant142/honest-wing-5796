import React, { useState } from 'react'
import MyFavorite from './MyFavorite'
import Footer from '../Components/footer'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import styled from 'styled-components'
import SingleSong from '../Components/Favorites/SingleSong'
import Add from '../Components/signupad'
import Cookies from 'js-cookie'
import Player from './Player'

const MyFavoriteMain = () => {
  const [checkIsTrue,setCheckIsTrue]=useState(false)
  const token = Cookies.get("login_token");

    return (
    <DIV>
      <div className='favorite-main'>
<div className='side-navbar' style={{width:"23%",position:"fixed"}}>
< Sidebar/>
</div>
<div className='navbar'>
<div className='side-navbar' style={{left:"23%", width:"77%",position:"fixed"}}>
   < Navbar/>
</div>
  {/* {!checkIsTrue? */}
  <MyFavorite setCheckIsTrue={setCheckIsTrue}/> 

  {/* :<SingleSong/>}  */}
</div>
      </div>
      < Footer/>
      <div style={{ position: "fixed", bottom: 0 , width:"100%"}}>
      {token?(<Player/>):(<Add/>)}
    </div>
    </DIV>
  )
}

export default MyFavoriteMain

const DIV= styled.div`
  .favorite-main{
    border: 0px solid red;
display: flex;
width:100%;
margin: auto;

  }
  .side-navbar{
/* width: 24%; */
border: 0px solid green;
  }
.navbar{
  width: 77%;
  margin-left: 23%;

  border: 0px solid blue;
}
`
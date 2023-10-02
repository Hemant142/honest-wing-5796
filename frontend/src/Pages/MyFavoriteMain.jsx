import React, { useState } from 'react'
import MyFavorite from './MyFavorite'
import Footer from '../Components/footer'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import styled from 'styled-components'
import SingleSong from '../Components/Favorites/SingleSong'
import Add from '../Components/signupad'

const MyFavoriteMain = () => {
 
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
  <div className='my-favorite-box'>

  </div>
  <MyFavorite /> 

  {/* :<SingleSong/>}  */}
</div>
      </div>
      <div >
      < Footer/>
      </div>
      <div style={{ position: "fixed", bottom: 0 , width:"100%"}}>
    <Add/>
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
/* background-color:#0000009b; */
  }
  .side-navbar{
/* width: 24%; */
border: 0px solid green;
  }
  .my-favorite-box{
    margin-top: 69px;
    /* margin-top: 200px; */
    margin-bottom: 50px;
/* border: 3px solid blue; */
  }
.navbar{
  width: 77%;
  margin-left: 23%;
  /* margin: auto; */
 
}
`
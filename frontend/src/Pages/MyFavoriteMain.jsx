import React, { useState } from 'react'
import MyFavorite from './MyFavorite'
import Footer from '../Components/footer'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import styled from 'styled-components'
import SingleSong from '../Components/Favorites/SingleSong'

const MyFavoriteMain = () => {
  const [checkIsTrue,setCheckIsTrue]=useState(false)

    return (
    <DIV>
      <div className='favorite-main'>
<div className='side-navbar'>
< Sidebar/>
</div>
<div className='navbar'>
   < Navbar/>
  {!checkIsTrue?<MyFavorite setCheckIsTrue={setCheckIsTrue}/> 
   :<SingleSong/>}
</div>
      </div>
      < Footer/>
    </DIV>
  )
}

export default MyFavoriteMain

const DIV= styled.div`
  .favorite-main{
    border: 0px solid red;
display: flex;
margin: auto;

  }
  .side-navbar{
width: 24%;
border: 0px solid green;
  }
.navbar{
  width: 76%;
  border: 0px solid blue;
}
`
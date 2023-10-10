import React, { useEffect, useState } from 'react'
import MyFavorite from './MyFavorite'
import Footer from '../Components/footer'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import styled from 'styled-components'
import SingleSong from '../Components/Favorites/SingleSong'
import Add from '../Components/signupad'
import Cookies from 'js-cookie'

import Player from './Player2'

// import Player from './Player'
// import { useDispatch, useSelector } from 'react-redux'
// import { GetAllFavoriteSong } from '../Redux/FavoriteSongReducer/Type'


const MyFavoriteMain = () => {

  const [checkIsTrue,setCheckIsTrue]=useState(false)

  const [sowPopup,setSow]= useState(false)
  const [index,setIndex]=useState(0)
  const [render1,setRender1]=useState(false)

  const token = Cookies.get("login_token");
  const dispatch=useDispatch();

  const {isLoading,FavoriteSongData,isError}= useSelector(state=>state.FavoriteSongReducer)
 console.log({isLoading,FavoriteSongData,isError})
 
  useEffect(()=>{
 dispatch(GetAllFavoriteSong()).then(res=>{
 console.log({res})
 })
  },[])
 
 


  // console.log(render1)
    return (
    <DIV>
      <div className='favorite-main'>
<div className='side-navbar' style={{width:"23%",position:"fixed"}}>
< Sidebar/>
</div>
<div className='navbar'>
<div className='side-navbar' style={{left:"23%", width:"77%",position:"fixed"}}>
   < Navbar setSow={setSow}/>
</div>
  {/* {!checkIsTrue? */}
  <div className='my-favorite-box'>

  </div>

  <MyFavorite  const sowPopup={sowPopup} 
  setSow ={setSow} setIndex={setIndex} 
  setRender1={setRender1} render1={render1}
  index={index} /> 

  {/* :<SingleSong/>}  */}
</div>
      </div>
      
      <div >
      < Footer/>
      </div>
      <div style={{ position: "fixed", bottom: 0 , width:"100%"}}>
      {token?

      (<Player index={index} render1={render1}/>)

//       (<Player index={index} songs={FavoriteSongData}/>)

      // ""
      :(<Add/>)}
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
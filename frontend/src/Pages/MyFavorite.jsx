import React, { useState } from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom'
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
export default function MyFavorite() {
  const [render,setRender]=useState("Songs")
  console.log({render})
  return (
    <DIV>
      <div className='favorite-main'>
   <div className="my-favorite">
    <h1>My Favorite</h1>
   </div>

   <div className="song-play">
     <Link onClick={()=>setRender("Songs")}>Songs</Link>
     <Link onClick={()=>setRender("Playlists")}>Playlists</Link>
     <Link onClick={()=>setRender("Artists")}>Artists</Link>
     <Link onClick={()=>setRender("Albums")}>Albums</Link>
   </div>
   <div className="paly-primium">
    <div className="play-btn">
      <h1>
      Play
      </h1>
      </div>
    <div className="primium">{"$"}</div>
    <div className="primium">{"#"}</div>
   </div>
   <div className="search-song">
<div className='song'>Song</div>
<div className='search'>
<InputGroup style={{ marginLeft:"70px"}}>
      <InputLeftElement
        pointerEvents="none"
        style={{marginLeft:"10px", marginTop:"18px"}}
      />
      <Input style={{width:"350px", borderRadius:"30px", height:"50px", border:"none", paddingLeft:"35px", color:"#H8H8H8", fontSize:"17px"}} type="text" placeholder="what you want to listen" />
    </InputGroup>
   <SearchIcon color="gray.300" />
</div>
   </div>
<div className='multiple-render'>

</div>
      </div>
    </DIV>
  )
}

const DIV= styled.div`
  
  .favorite-main{
    border: 3px solid red;
    width:100%;
    display:flex;
    flex-direction:column;
    gap:1rem;

  }
.my-favorite{
  border:2px solid blue;
}
.my-favorite>h1{
  font-size: 35px;
  font-weight: 700;
  padding: .3rem 1rem;
  
}
  .song-play{
    border:2px solid green;
    font-size: 18px;
  font-weight: 650;
    display: flex;
    gap: 1rem;
    padding: .3rem 1rem;
  }

  .paly-primium{
    border:2px solid blue;
    display: flex;
    gap: .8rem;
    padding: .3rem 1rem;

  }
  .play-btn{
    width: 120px;
    height: 50px;
    border: 1px solid black;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 18px;
  font-weight:650;
   
  }
  
  .primium{
    width: 50px;
    height: 50px;
    border: 1px solid black;
    border-radius: 50%;
   cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
  font-weight: 650;
  }
  .search-song{
    border:2px solid green;
    display:flex;
    padding: .3rem 1rem;
    justify-content: space-between;
    align-items: center;
  }
  .search{
    display: flex;
    justify-content: center;
  }
  .multiple-render{
    border: 2px solid cyan;
  }
`
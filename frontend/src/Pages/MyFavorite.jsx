import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Artist from "../Components/Favorites/Artist";
import Albums from "../Components/Favorites/Albums";
import Song from "../Components/Favorites/Songs";
import Playlists from "../Components/Favorites/Playlists";
import PrimiumPopup from "../Components/Favorites/PrimiumPopup";
export default function MyFavorite() {
  const [render, setRender] = useState("Songs");
  const [sowInput,setSowInput]=useState(false)
  const [sowPopup,setSow]= useState(false)
 
  const [song,setSong]=useState("")
  console.log({song})
  console.log({ render });
 
  const handleChange=(e)=>{

    setSong(e.target.value)
  }
  return (
    <DIV>
      {sowPopup&&<PrimiumPopup setSow={setSow}/>}
      <div className="favorite-main">
        <div className="my-favorite">
          <h1>My Favorite</h1>
        </div>

        <div className="song-play">
          <Link style={{color:render=="Songs"?"#fff":"#ffffff73"}} onClick={() => setRender("Songs")}>Songs</Link>
          <Link style={{color:render=="Playlists"?"#fff":"#ffffff73"}} onClick={() => setRender("Playlists")}>Playlists</Link>
          <Link style={{color:render=="Artists"?"#fff":"#ffffff73"}} onClick={() => setRender("Artists")}>Artists</Link>
          <Link style={{color:render=="Albums"?"#fff":"#ffffff73"}} onClick={() => setRender("Albums")}>Albums</Link>
        </div>
        
        <div className="paly-primium">
          <div className="play-btn">
            <h1>Play</h1>
          </div>
          <div className="primium" onClick={(e)=>{
               setSow(true)
               e.stopPropagation()
          }}>{"$"}</div>
          <div className="primium" onClick={(e)=>{
               setSow(true)
               e.stopPropagation()
          }}>{"#"}</div>
        </div>
        <div className="search-song">
          <div className="song">SONG(3)</div>
          <div className="search">
            <SearchIcon className="search-icon" onClick={(e)=>{
              setSowInput(!sowInput)
              e.stopPropagation();
            }
            } color="gray.300" />
           {sowInput&&<InputGroup>
              <InputLeftElement pointerEvents="none" />
              <input onChange={handleChange} value={song} className="search-input" type="text" placeholder="search your favorite" />
            </InputGroup>}
          </div>
        </div>
        <div className="multiple-render">
          {render=="Artists"&&<Artist/>}
          {render=="Songs"&&<Song/>}
          {render=="Playlists"&&<Playlists/>}
          {render=="Albums"&&<Albums/>}
        </div>
        
      </div>
    </DIV>
  );
}

const DIV = styled.div`
  
  .favorite-main{
    border: 0px solid red;
    width:100%;
    /* height:5000px; */
    display:flex;
    flex-direction:column;
    gap:1rem;
    color: #fff;
    /* background: repeating-linear-gradient(to right, #ff0000, #00ff00 20%, #0000ff 40%); */
    background: linear-gradient(to bottom, #eb06cc9b 0%, #000000b9 80%);
 /* background: repeating-linear-gradient(to bottom, #eb06cc9b 50%, #0000009b 50%); */
 /* background: repeating-linear-gradient(to bottom, #eb06cc9b 0%, #eb06cc9b 30%,#0000009b 30%, #0000009b 100%); */
 /* background: linear-gradient(to bottom, #eb06cc9b 0%, #eb06cc9b 30%,#0000009b 30%, #0000009b 100%); */

    /* background-color: #eb06cc9b; */

  }
.my-favorite{
  border:0px solid blue;
}
.my-favorite>h1{
  font-size: 35px;
  font-weight: 700;
  padding: .3rem 1rem;
  
}
  .song-play{
    border:0px solid green;
    font-size: 18px;
  font-weight: 650;
    display: flex;
    gap: 1rem;
    padding: .3rem 1rem;
    
  }

  .paly-primium{
    border:0px solid blue;
    display: flex;
    gap: .8rem;
    padding: .3rem 1rem;

  }
  .play-btn{
    width: 120px;
    height: 50px;
    /* border: 1px solid #fff; */
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 18px;
  font-weight:650;
  background: linear-gradient(to right, #547a7a 0%, #52b1b1 50%, #08e6e6 100%);
  /* background: linear-gradient(to right, #ff0000 0%, #00ff00 50%, #0000ff 100%); */

   
  }
  .play-btn:hover{
    background: linear-gradient(to left top,  #0ee6e6 0%,  #4d6969 50%, #248080 100%);
  }
  
  .primium{
    width: 50px;
    height: 50px;
    border: 0.06rem solid #ffffffd5;
    border-radius: 50%;
   cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
  font-weight: 650;
  }
  .song{
    color:gray.300;
    font-size:16px;
    font-weight: 600;
  }
  .search-song{
    border-bottom:1px solid #ffffffba;
    display:flex;
    padding: .3rem 1rem;
    justify-content: space-between;
    align-items: center;
  }
  .search{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0px solid red;
    gap: .6rem;
  }
  .search-input{
    border-radius: 30px;
    padding: .3rem 1rem;
    background-color: #0000009b;
    color: #fff;
    outline: none;
    border: 0rem;
  }
  .search-icon{
   height: 50px;
   cursor: pointer;
  }

  /* style={{width:"350px", borderRadius:"30px", height:"50px", border:"none", paddingLeft:"35px", color:"#H8H8H8", fontSize:"17px"}} */
  .multiple-render{
    border: 0px solid cyan;
    /* height:400px; */
  }
`;

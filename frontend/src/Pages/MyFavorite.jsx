import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Artist from "../Components/Favorites/Artist";
import Albums from "../Components/Favorites/Albums";
import Song from "../Components/Favorites/Songs";
import Playlists from "../Components/Favorites/Playlists";
import PrimiumPopup from "../Components/Favorites/PrimiumPopup";

import { useDispatch, useSelector } from "react-redux";
import { GetAllFavoriteSong } from "../Redux/FavoriteSongReducer/Type";
import Loader from "../Components/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faStop } from "@fortawesome/free-solid-svg-icons";
export default function MyFavorite({sowPopup,setSow,setindex,FavoriteSongData}) {
  const [render, setRender] = useState("Songs");
  const [sowInput,setSowInput]=useState(false)
 
  const [song,setSong]=useState("")
//  const dispatch=useDispatch();

//  const {isLoading,FavoriteSongData,isError}= useSelector(state=>state.FavoriteSongReducer)
// console.log({isLoading,FavoriteSongData,isError})

//  useEffect(()=>{
// dispatch(GetAllFavoriteSong()).then(res=>{
// console.log({res})
// })
//  },[])



  const handleChange=(e)=>{
    setSong(e.target.value)
  }

  return (
    <DIV>
      {sowPopup && <PrimiumPopup setSow={setSow} />}
      <div className="favorite-main">
        <div className="my-favorite">
          <h1>My Favorite</h1>
        </div>

        <div className="song-play">
          <Link
            style={{ color: render == "Songs" ? "#fff" : "#ffffff73" }}
            onClick={() => setRender("Songs")}
          >
            Songs
          </Link>
          <Link
            style={{ color: render == "Playlists" ? "#fff" : "#ffffff73" }}
            onClick={() => setRender("Playlists")}
          >
            Playlists
          </Link>
          <Link
            style={{ color: render == "Artists" ? "#fff" : "#ffffff73" }}
            onClick={() => setRender("Artists")}
          >
            Artists
          </Link>
          <Link
            style={{ color: render == "Albums" ? "#fff" : "#ffffff73" }}
            onClick={() => setRender("Albums")}
          >
            Albums
          </Link>
        </div>

        <div className="paly-primium">
          <div className="play-btn">
            {/* <h1>Play</h1> */}
            {/* <FontAwesomeIcon icon={faPlay} className="palay-icon"/> */}
            {/* <FontAwesomeIcon icon={faPause} className="palay-icon"/> */}
          </div>
          <div
            className="primium"
            onClick={(e) => {
              setSow(true);
              e.stopPropagation();
            }}
          >
            {"$"}
          </div>
          <div
            className="primium"
            onClick={(e) => {
              setSow(true);
              e.stopPropagation();
            }}
          >
            {"#"}
          </div>
        </div>
        <div className="search-song">
          <div className="song">{`${render}(${render=="Songs"?FavoriteSongData.length:0})`}</div>
          <div className="search">
            <SearchIcon
              className="search-icon"
              onClick={(e) => {
                setSowInput(!sowInput);
                e.stopPropagation();
              }}
              color="gray.300"
            />
            {sowInput && (
              <InputGroup>
                <InputLeftElement pointerEvents="none" />
                <input
                  onChange={handleChange}
                  value={song}
                  className="search-input"
                  type="text"
                  placeholder="search your favorite"
                />
              </InputGroup>
            )}
          </div>
        </div>

       {/* {isLoading?<div className="loader">
        <Loader />
       </div>: */}
       <div className="multiple-render">
          {render=="Artists"&&<Artist />}
          {render=="Songs"&&<Song FavoriteSongData={FavoriteSongData} setindex={setindex}/>}
          {render=="Playlists"&&<Playlists />}
          {render=="Albums"&&<Albums />}
        </div>
       {/* } */}
        

      </div>
    </DIV>
  );
}

const DIV = styled.div`

  background-color: #000000d3;
  /* background-color: #000000ce; */
  .favorite-main{
    margin-bottom: 10px;
    /* border: 5px solid red; */
    width:99%;

    /* height:5000px; */
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: #fff;

   
 background: linear-gradient(to bottom, #dd07079b 0px, #dd07079b 268px,#0000009b 30%, #0000009b 100%);
 /* background: linear-gradient(to bottom, #eb06cc9b 0%, #eb06cc9b 30%,#0000009b 30%, #0000009b 100%); */


  }
  .my-favorite {
    border: 0px solid blue;
  }
  .my-favorite > h1 {
    font-size: 35px;
    font-weight: 700;
    padding: 0.3rem 1rem;
  }
  .song-play {
    border: 0px solid green;
    font-size: 18px;
    font-weight: 650;
    display: flex;
    gap: 1rem;
    padding: 0.3rem 1rem;
  }

  .paly-primium {
    border: 0px solid blue;
    display: flex;
    gap: 0.8rem;
    padding: 0.3rem 1rem;
  }

  play-btn{
    width: 55px;
    height: 55px;

    /* border: 1px solid #fff; */
    /* padding:5px; */
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    font-size: 30px;
  font-weight:650;
  background-color: #45bd45;
  /* background: linear-gradient(to right, #547a7a 0%, #52b1b1 50%, #08e6e6 100%); */
  /* background: linear-gradient(90deg, rgba(246,0,203,1) 0%, rgba(0,212,255,1) 100%, rgba(0,234,247,1) 100%); */
  /* background: linear-gradient(to right, #ff0000 0%, #00ff00 50%, #0000ff 100%); */

   

  }
  play-btn:hover {
    /* background: linear-gradient(to left top,  #0ee6e6 0%,  #4d6969 50%, #248080 100%); */
    background-color: #34ca34;

    width: 57px;
    height: 57px;
    padding: .3rem;

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
  .song {
    color: gray.300;
    font-size: 16px;
    font-weight: 600;
  }
  .search-song {
    border-bottom: 1px solid #ffffffba;
    display: flex;
    padding: 0.3rem 1rem;
    justify-content: space-between;
    align-items: center;
  }
  .search {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0px solid red;
    gap: 0.6rem;
  }
  .search-input {
    border-radius: 30px;
    padding: 0.3rem 1rem;
    background-color: #fff;
    color: #000;
    z-index: -1;
    outline: none;
    border: 0rem;
  }
  .search-icon {
    height: 50px;
    cursor: pointer;
  }

  /* style={{width:"350px", borderRadius:"30px", height:"50px", border:"none", paddingLeft:"35px", color:"#H8H8H8", fontSize:"17px"}} */
  .multiple-render {
    border: 0px solid cyan;
    /* height:400px; */
  }
  .loader{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8%;
  }
`;

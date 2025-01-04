
import styled from 'styled-components';
import NoFavoriteSong from './NoFavoriteSong';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { AddFavoriteSong, DeletFavoriteSong, GetAllFavoriteSong } from '../../Redux/FavoriteSongReducer/Type';

import { Tooltip, useToast } from '@chakra-ui/react';
const Song = ({FavoriteSongData,setIndex,index,setRender1,render1}) => {
  // const audioUrl = 'https://cdnsongs.com/music/data/Punjabi/202108/MoonChild_Era/128/Lover.mp3';
  const [durations, setDurations] = useState([]);
  const [likedSongs, setLikedSongs] = useState(
    JSON.parse(localStorage.getItem("likedSongs")) || []
    
  );
  // console.log(FavoriteSongData)

   const token = Cookies.get("login_token");
const toast =useToast()
  const dispatch=useDispatch()
// <==================================Time of the Song===================>
useEffect(() => {
  const fetchDurations = async () => {
    const durationsArray = [];
    for (const song of FavoriteSongData) {
      const audioElement = new Audio(song.audio);
      audioElement.addEventListener('loadedmetadata', () => {
        const duration = audioElement.duration;
        durationsArray.push(duration);
        if (durationsArray.length === FavoriteSongData.length) {
          setDurations(durationsArray);
        }
      });
      audioElement.load();
    }
  };

  fetchDurations();
}, [FavoriteSongData]);

function formatDuration(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.round(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

// <=========================================End of Logic==================>





  const handleRemove=(item)=>{
    // console.log(setRender1,"item")

    
   
    dispatch(DeletFavoriteSong(item._id,token)).then(res=>{
      // console.log({res})
      dispatch(GetAllFavoriteSong('r',token))
      toast({
        title: `You dislike this song`,
        position: "bottom",
        status: 'error',
        duration: 3000,
        isClosable: true,
    })
    setRender1(!render1)

    })
    localStorage.setItem(
      "likedSongs",
      JSON.stringify(likedSongs.filter((songId) => songId !== item.songId))
    );
  }
  console.log(FavoriteSongData.length,"Length")

  


// console.log(formatDuration(durations[0]))
  return (
    <>
   { FavoriteSongData.length>0?(<DIV>
      <div className="song-main">
  <div className="table">
<div className="table-row-1">
<p className='hash-tag'>{"#"}</p>
<p>TITLE</p>
</div>
<div className="table-row-2">
<p>ALBUMS</p>
<p>Time</p>
</div>

  </div>

  {FavoriteSongData.map((item, i) => (
          <div key={i} className='item-box'>
            <div className="item-1">
              <p>{i + 1}</p>
              <Tooltip label={"Dislike"}><FontAwesomeIcon icon={faHeart} className="heart" onClick={() => handleRemove(item)} /></Tooltip>
              <div className='about-song'>
                <div className='image-box'>
                  {/* Add a conditional check to ensure 'avatar' exists */}
                  {item.avatar && (
                    <img src={item.avatar} alt="img" onClick={() => setIndex(i)} />
                  )}
                </div>
                <div className='singer-name'>
                  <p>{item.artist}</p>
                </div>
              </div>
              <div className='title'>
                <p>{item.title}</p>
              </div>
            </div>
            <div className="item-2">
              <p>{item.title}</p>
              <p>{formatDuration(durations[i] || 0)}</p>
            </div>
          </div>
        ))}


      </div>
    </DIV>):(< NoFavoriteSong/>)}
    </>
  )
}

export default Song

const DIV= styled.div`
  
.song-main{
  border:0px solid #4807e2;
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
  gap: .5rem;
 
}
.table,.item-box{
  border: 0px solid #07e262;
  display: flex;
  justify-content: space-between;
  padding: .3rem 1rem;
  align-items: center;
}
.make-it-flex{
  border:0px solid red;
  display: flex;
  gap:1rem;
  justify-content: center;
  align-items: center;
}
.table-row-1,.table-row-2{
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0px solid green;
  padding: .5rem;
  color: gray.200;
  font-size: 16px;
  font-weight: 500;
}
.table-row-1{
width:50%;
}
.table-row-2{
  width:30%;
}
.item-1,.item-2{
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  border: 0px solid green;
  padding: .5rem;
  color: gray.200;
  font-size: 16px;
  font-weight: 500;
}
.item-1{
  width: 55%;
}
.item-2{
  width: 30%;
}
.about-song{
display:flex;
justify-content:space-between;
gap: 1rem;
align-items:center;
  border: 0px solid blue;
  cursor: pointer;

}
.singer-name{
  text-align: center;
  width:100px;
  border:0px solid green;
}
.image-box{
  border: 0px solid blue;
width: 70px;
}
.image-box>img{
  width: 100%;
}
.hash-tag{
  font-size: 20px;
  font-weight: 600;
}
.title{
  width: 150px;
  text-align:center;
  border: 0px solid red;
}
.heart{
  color:green;
  font-size: 25px;
  font-weight:600;
  color: #45bd45;
 cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.heart:hover{
  color: #34ca34;
  font-size: 27px;
}

@media screen and (max-width: 786px) {
  .make-it-flex{
    flex-direction: column;
  
  }
  .about-song{
    flex-direction: column;
  
  }

}
`
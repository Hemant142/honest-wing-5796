import React from 'react'
import styled from 'styled-components';
import NoFavoriteSong from './NoFavoriteSong';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
const Playlists = () => {
  const arr=new Array(0).fill(0);

  return (
    arr.length>0?<DIV>
      <div className="song-main">
  <div className="table">
<div className="table-row">
<p className='hash-tag'>{"#"}</p>
<p>TITLE</p>
</div>
<div className="table-row">
<p>ALBUMS</p>
<p></p>
</div>

  </div>
{arr.map((el,i)=><div key={i} className='item-box'>
<div className="item">
<p>{i+1}</p>
{/* <FontAwesomeIcon className="heart" icon="fa-regular fa-heart" /> */}
<FontAwesomeIcon icon={faHeart} className="heart" />
{/* <p className='heart'>🤍</p> */}
<img src="#" alt="img" />
<p>Song name</p>
</div>
<div className="item">
  <p>Singer</p>
  <p>time</p>
</div>
</div>)}

      </div>
    </DIV>:< NoFavoriteSong/>
  )
}

export default Playlists

const DIV= styled.div`
  
.song-main{
  border:0px solid #4807e2;
  display: flex;
  flex-direction: column;
  /* width: 400px; */
  gap: .5rem;
  /* overflow-y: 2; */
}
.table,.item-box{
  border: 0px solid #07e262;
  display: flex;
  justify-content: space-between;
  padding: .3rem 1rem;
  align-items: center;
}
.item-box{
  cursor: pointer;

}
.table-row{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  border: 0px solid green;
  padding: .5rem;
  color: gray.200;
  font-size: 16px;
  font-weight: 500;
}
.item{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  border: 0px solid green;
  padding: .5rem;
  color: gray.200;
  font-size: 16px;
  font-weight: 500;
}
.hash-tag{
  font-size: 20px;
  font-weight: 600;
}
.heart{
  color:green;
  font-size: 25px;
  font-weight:600;
  color: #0cf1e6;
  /* border-radius: 50%; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

`
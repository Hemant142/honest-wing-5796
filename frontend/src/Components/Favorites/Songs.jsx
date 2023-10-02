import React from 'react'
import styled from 'styled-components';
import NoFavoriteSong from './NoFavoriteSong';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { AddFavoriteSong, DeletFavoriteSong, GetAllFavoriteSong } from '../../Redux/FavoriteSongReducer/Type';
const Song = ({FavoriteSongData}) => {

  const dispatch=useDispatch()
  const handleRemove=(id)=>{
    dispatch(DeletFavoriteSong(id)).then(res=>{
      console.log({res})
      dispatch(GetAllFavoriteSong())
    })
  }

    // const {FavoriteSongData}=useSelector(state=>state.FavoriteSongReducer)
    // console.log({FavoriteSongData})
  // const handleAddSongTofavorite = () => {
  //   let SongDetails = {
  //     title: item.title,
  //     avatar: item.avatar,
  //     audio: item.audio,
  //     genre: item.genre,
  //     image: item.image,
  //     artist: item.artist,
  //     language: item.language,
  //     songId:item._id
  //   };

  //   let bag=true;
  //   if(Array.isArray(FavoriteSongData)){
  //     for(let el of FavoriteSongData){
  //       if(el.songId==item._id){
  //         bag=false
  //       }
  //     }
  //   }
  //   if(bag){
      // dispatch(AddFavoriteSong(SongDetails)).then(res=>{
      //   dispatch(GetAllFavoriteSong())
      // })
  //   }else{
  //     dispatch(DeletFavoriteSong(item._id)).then(res=>{
  //       dispatch(GetAllFavoriteSong())
  //     })

  //   }

  // };

  return (
    FavoriteSongData.length>0?<DIV>
      <div className="song-main">
  <div className="table">
<div className="table-row-1">
<p className='hash-tag'>{"#"}</p>
<p>TITLE</p>
</div>
<div className="table-row-2">
<p>ALBUMS</p>
<p></p>
</div>

  </div>
{FavoriteSongData.map((item,i)=><div key={i} className='item-box'>
<div className="item-1">
<p>{i+1}</p>
<FontAwesomeIcon icon={faHeart} className="heart" onClick={()=>handleRemove(item._id)} />
<div className='about-song'>
  <div className='image-box'>
<img src={item.avatar} alt="img" />
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
  <p>time</p>
</div>
</div>)}

      </div>
    </DIV>:< NoFavoriteSong/>
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
/* .item-box{
  cursor: pointer;

} */
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

`
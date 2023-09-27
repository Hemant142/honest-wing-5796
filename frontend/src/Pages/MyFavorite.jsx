import React from 'react'
import styled from "styled-components"
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
export default function MyFavorite() {
  return (
    <DIV>
      <div className='favorite-main'>
   <div className="my-favorite">
    <h1>My Favorite</h1>
   </div>

   <div className="song-play">
     <Link>Songs</Link>
     <Link>Playlists</Link>
     <Link>Artists</Link>
     <Link>Albums</Link>
   </div>
   <div className="paly-primium">
    <div className="primium">Play</div>
    <div className="primium">{"$"}</div>
    <div className="primium">{"#"}</div>
   </div>
   <div className="search-song">
<div className='song'>Song</div>
<div className='search'>Search</div>
   </div>
<div className='multiple-render'>

</div>
      </div>
    </DIV>
  )
}

const DIV= styled.div`
  
  .favorite-main{
    border: 0px solid red;
    width:100%;
    display:flex;
    flex-direction:column;
    gap:1rem;

  }
.my-favorite{
  border:0px solid blue;
}
  .song-play{
    border:0px solid green;
  }
  .paly-primium{
    border:0px solid blue;
  }
  .search-song{
    border:0px solid green;
  }
  .multiple-render{
    border: 0px solid cyan;
  }
`
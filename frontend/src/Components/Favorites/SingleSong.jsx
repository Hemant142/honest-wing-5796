import React from 'react'
import styled from 'styled-components'
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Button } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
const SingleSong = () => {
    const arr= new Array(10).fill(0)
  return (
    <DIV>
    <div className="song-main">
<div className='image-to-content'>
    <div className="image">
        <img src="https://fastly.picsum.photos/id/805/536/354.jpg?hmac=RXC0ZMMUOP40AcmXEFwCVG94YG2LZEs9DQyoEYHLF0k" alt="" />
    </div>
    <div className="content">
        <p>Song</p>
        <h1>Starainger my song is Strainger</h1>
        <p>actor name and some content</p>
    </div>
</div>
<div className='paly-btn'>
<button className='song-btn'>Play</button>
<FontAwesomeIcon icon={faHeart} className="heart" />
<div className='dot-symbole'>
<h1>...</h1>
</div>
</div>
    </div>
  </DIV>
  )
}

export default SingleSong

const DIV= styled.div`
  
.song-main{
  border:0px solid red;
  display: flex;
  flex-direction: column;
  background-color: #0000009b;
  /* width: 400px; */
  gap: 2rem;
  padding: 0rem 2rem;
  /* overflow-y: 2; */
}
.image-to-content,.paly-btn{
    border: 0px solid cyan;
}
.image-to-content{
    margin: 5rem 0px 0px;
    display:flex;

    gap: 1.5rem;
}
.image{
    width: 40%;
}
.image>img{
    width: 100%;
}

.content,.image{
border:0px solid #07e262;
display: flex;
flex-direction: column;
justify-content: flex-end;
}
.content{
   color:#fff;
  
}
.content>h1{
    font-size: 40px;
    font-weight: 1000;

}
.paly-btn{
    display: flex;
    gap: 2rem;
    align-items: center;
    color:#fff;
    border-top: 1px solid gray;
   border-bottom: 1px solid gray;
   padding:.5rem 0rem;
}
.dot-symbole{
    border: 0px solid blue;
    display:flex;
    justify-content: center;
    align-items:center;
    text-align:center;
}
.dot-symbole{
    font-size: 30px;
    font-weight:600;
    padding-bottom: 1rem;
    cursor: pointer;
}
.song-btn{
    width: 120px;
    height: 50px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 18px;
  font-weight:650;
  background: linear-gradient(to right, #547a7a 0%, #52b1b1 50%, #08e6e6 100%);
 
  }
  .song-btn:hover{
    background: linear-gradient(to left top,  #0ee6e6 0%,  #4d6969 50%, #248080 100%);
  }
  
/* .table,.item-box{
  border: 0px solid #07e262;
  display: flex;
  justify-content: space-between;
  padding: .3rem 1rem;
  align-items: center;
} */
/* .item-box{
  cursor: pointer;

} */
/* .table-row{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  border: 0px solid green;
  padding: .5rem;
  color: gray.200;
  font-size: 16px;
  font-weight: 500;
} */
/* .item{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  border: 0px solid green;
  padding: .5rem;
  color: gray.200;
  font-size: 16px;
  font-weight: 500;
} */
/* .hash-tag{
  font-size: 20px;
  font-weight: 600;
} */
 .heart{
  color:green;
  font-size: 25px;
  font-weight:600;
  color: red;
  border-radius: 50%;
  display: flex; 
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
} 

`
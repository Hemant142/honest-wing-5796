import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
const NoFavoriteSong = () => {
    const navigate= useNavigate()
  return (
    <DIV>
     <div className='message-box'>
 <h1>Sorry Nothing Found</h1>
 <p>Keep exploring and find your favorite</p>
 <button onClick={()=>{
    setTimeout(() => {
        navigate("/")
    }, 500);
}
    }>
EXPLORE
 </button>
     </div>
    </DIV>
  )
}

export default NoFavoriteSong

const DIV=styled.div`
border:0px solid red;
height:400px;
display: flex;
justify-content: center;
align-items: center;

.message-box{
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;

    /* gap: .8rem; */
}
.message-box>p{
    font-size: 18px;
  font-weight:500;
}
.message-box>h1{
    font-size: 24px;
  font-weight:700;
}
.message-box>button{
  margin-top: 1rem;
  padding: 0.5rem 1.5rem;
  background-color: #fff;
  border-radius: 30px;
  color:#000;
  font-size: 16px;
  font-weight:650;
}
.message-box>button:hover{
    background-color: #ffffffa6;
}
`
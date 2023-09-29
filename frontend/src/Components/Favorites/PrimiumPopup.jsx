import React from 'react'
import styled from 'styled-components'
import appScaner from "../images/getApp.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
const PrimiumPopup = ({setSow}) => {
  return (
    <DIV>
      <div className='primium-main'>
        <div className='primium-icon'>
            <div></div>
            <div className="icon" onClick={()=>setSow(false)}>
            <FontAwesomeIcon icon={faXmark} />
            </div>
        </div>

        <div className="other-content">
  <div className='unlock-message'>
    <h1>Get premium to unlock full exprerience</h1>
  </div>

  <div className="canner">
    <img src={appScaner} alt="Scanner" />
  </div>
  <div className='qr-code'>
<p>Scan QR code to get premium</p>
  </div>

        </div>
      </div>
    </DIV>
  )
}

export default PrimiumPopup

const DIV= styled.div`
width: 60%;
/* height: 50vh; */
margin:auto;
background-color: #fff;
border: 0px solid red;

/* z-index: 1; */
position: fixed;
top:10%;
left: 20%;
box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
.primium-main{
    border:0px solid red;
    display: flex;
    flex-direction: column;
}
.primium-icon{
    display: flex;
    justify-content: space-between;
    border:0px solid blue;
    /* align-items: center; */
    /* background-color: #fff; */
    background-image: url("https://cdn.pixabay.com/photo/2014/01/31/11/56/level-255394_1280.jpg");
    height: 200px;
}


.icon{
    margin: 10px 10px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* border:2px solid green; */
    width: 30px ;
    height: 30px;
   color: #fff;
   border-radius: 50%;
   /* text-align:center; */
 cursor: pointer;
 background-color: #0000009b;
 box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
}
.other-content{
    background-color: #0000009b;

}

.unlock-message{
    text-align: center;
}
p,h1{
    font-size: 32px;
  font-weight: 700;
  padding: .3rem 1rem;
 color: #fff;
}
p{
    font-size: 20px;
  font-weight: 600;
  padding:.3rem;
}
.canner{
    border: 0px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
}
.qr-code{
    border: 0px solid red;
    display: flex;
    justify-content: center;
    align-items: center; 
}
.canner>img{
    width: 20%;
}
`
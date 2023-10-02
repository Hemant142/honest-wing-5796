import React from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import Footer from '../Components/footer'
import Dummy from '../Components/dummy'
import Add from '../Components/signupad'
import Browser from '../Components/browser'
export default function Home() {
  return (
    <>
     <div style={{display:"flex", width:"100%"}}>
      
      
      
      <div style={{width:"23%",position:"fixed"}}>
      <Sidebar/>
      </div>

      <div style={{left:"23%", width:"77%",position:"fixed", zIndex:"2" }}>
      <Navbar />
      </div>
     
      
       
       
    </div>
    <Browser/>
    {/* <Dummy/> */}
    <Footer/>
    <div style={{ position: "fixed", bottom: 0 , width:"100%"}}>
      
    <Add/>
    </div>
   
    </>
   
  )
}

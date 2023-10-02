import React from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import Footer from '../Components/footer'
import Dummy from '../Components/dummy'
import Add from '../Components/signupad'
import Browser from '../Components/browser'
import Songs from './Songs'
import Cookies from 'js-cookie'
import Player from './Player'

export default function Home() {
  const token = Cookies.get("login_token");
  console.log(token, "Token");
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
    {/* <Songs/> */}
    {/* <Dummy/> */}
    <Footer/>
    <div style={{ position: "fixed", bottom: 0 , width:"100%"}}>
      {token?
      (<Player index={0}/>)
      // ""
      :(<Add/>)}
    
    </div>
   
    </>
   
  )
}

import React from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import Footer from '../Components/footer'
import Dummy from '../Components/dummy'
import Add from '../Components/signupad'
import Browser from '../Components/browser'
import "../Pages/css/home.css"
export default function Home() {
  return (
    <>
     <div id='main' >
      
      
      
      <div id='sidebar' >
      <Sidebar/>
      </div>

      <div id='navbar' >
      <Navbar />
      </div>
     
      
       
       
    </div>
    <div id='browse'>
    <Browser/>
    </div>
   
    {/* <Dummy/> */}
    <Footer/>
    <div id='player' style={{bottom:"0px", position:"fixed", width:"100%"}} >
      
    <Add/>
    </div>
   
    </>
   
  )
}

import React from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import Footer from '../Components/footer'
export default function Home() {
  return (
    <>
     <div style={{display:"flex", width:"100%"}}>
      
      
      
      <div style={{width:"24%",position:"fixed"}}>
      <Sidebar/>
      </div>
      <div style={{left:"24%", width:"76%",position:"fixed"}}>
      <Navbar />
      </div>
     
      
       
       
    </div>
    <Footer/>
    </>
   
  )
}

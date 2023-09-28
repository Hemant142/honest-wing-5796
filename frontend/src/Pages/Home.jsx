import React from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
export default function Home() {
  return (
    <div style={{display:"flex"}}>
       <Sidebar/>
       <Navbar/>
    </div>
  )
}

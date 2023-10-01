import React from 'react'
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
export default function Navbar() {
  return (

    <div style={{display:"flex",alignItems:"center",  height:"70px",backgroundColor:"#2C2C2C"
    , width:"100%",  }}>

    <InputGroup style={{ marginLeft:"70px"}}>
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.600" />}
        style={{ marginTop:"7px"}}
      />
      <Input style={{width:"350px", borderRadius:"30px", height:"50px", border:"none", paddingLeft:"35px", color:"#H8H8H8", fontSize:"17px"}} type="text" placeholder="what you want to listen" />
    </InputGroup>

    <div style={{display:"flex", margin:"10px"}}>

    <a style={{textDecoration:"none", color:"#969696", fontSize:"18px", margin:"5px"}} href="">Premium</a>
    <a style={{textDecoration:"none", color:"#969696", fontSize:"18px", margin:"5px"}}  href="">Support</a>
    <a style={{textDecoration:"none", color:"#969696", fontSize:"18px", margin:"5px"}}  href="">Download</a>
    </div>

    
     

     <button style={{width:"200px", backgroundColor:"black", color:"white", borderRadius:"30px", height:"50px", border:"none", fontSize:"16px", fontWeight:"bold"}}>Sign Up</button>

     <button style={{width:"200px", backgroundColor:"white", color:"black", borderRadius:"30px", marginLeft:"10px", marginRight:"25px", height:"50px", border:"none", fontWeight:"bold"}}>Log in</button>

    </div>
  )
}
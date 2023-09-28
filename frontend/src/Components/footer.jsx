import React from 'react'
import { Flex } from '@chakra-ui/react'
export default function Footer() {
  return (
  <div>
 <Flex style={{backgroundColor:"#2C2C2C", color:"white", justifyContent:"space-around", padding:"26px", marginLeft:"350px",marginTop:"340px"}}>
     <Flex direction={"column"}>
          <h5 style={{fontWeight:"bold"}}>Company</h5>
          <p>About</p>
          <p>Jobs</p>
          <p>For the Record</p>


          </Flex>



          <Flex direction={"column"}>
          <h5 style={{fontWeight:"bold"}}>Communities</h5>
          <p>For Artists</p>
          <p>Developers</p>
          <p>Advertising</p>
          <p>Investors</p>
          <p>Vendors</p>


          </Flex>   


          <Flex direction={"column"}>
          <h5 style={{fontWeight:"bold"}}>Support</h5>
          <p>Free Mobile App</p>
          


          </Flex> 

          <Flex style={{justifyContent:"space-around", width:"13%"}}>
            <img style={{width:"35px", borderRadius:"50%",height:"35px"}} src="https://cdn.mos.cms.futurecdn.net/z3bn6deaxmrjmQHNEkpcZE.jpg" alt="" />

            <img style={{width:"35px", borderRadius:"50%",height:"35px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJNu5L51jR5WCNaVVMC-2vVvECpdp5axXpELDafKg&s" alt="" />

            <img style={{width:"35px",height:"35px", borderRadius:"50%"}} src="https://cdn.mos.cms.futurecdn.net/6dDoc8GV9fYUPExgLYPqqT.jpg" alt="" />
            
            </Flex> 

    </Flex >


    <Flex style={{backgroundColor:"#2C2C2C", color:"white", justifyContent:"space-around", padding:"26px", marginLeft:"350px",borderTop:"1px solid "}}>
    <a style={{textDecoration:"none", color:"#787878", marginLeft:"0px"}} href="">Legal</a>
         <a style={{textDecoration:"none", color:"#787878",marginLeft:"10px"}} href="">Privacy Center</a>
         <a style={{textDecoration:"none", color:"#787878",marginLeft:"10px"}} href="">Privacy Policy</a>
         <a style={{textDecoration:"none", color:"#787878",marginLeft:"10px"}} href="">Cookies</a>
         <a style={{textDecoration:"none", color:"#787878",marginLeft:"10px"}} href="">About App</a>
         <a style={{textDecoration:"none", color:"#787878",marginLeft:"10px"}} href="">Accessibilty</a>
         
    </Flex>
  </div>
   


      

    
  )
}
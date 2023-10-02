
import React from 'react'

import {
   
   Flex,
   Box,
   Grid,
   Image

 } from '@chakra-ui/react'
import "../Pages/css/home.css"

export default function Browser() {
  return (
    
<Box  >

    <Box backgroundColor={"black"} borderRadius={"5px"} padding={"5px"}>
    <p style={{marginLeft:"50px", marginTop:"10px", fontFamily:"monospace", fontSize:"30px", fontWeight:"bolder", color:"white"}}>Recently played</p>
<Flex
  marginTop={"50px"}
  justifyContent={"flex-start"}
className='grid'

flexWrap="wrap" 
      gridTemplateColumns={{ base: "1fr", md: "repeat(4, 1fr)", sm:"repeat(3,1fr" }} 
 >
  <Box
  width={"170px"}
  height={"270px"}
  backgroundColor={"#2C2C2C"}
  color={"white"}
  borderRadius={"4px"}
  marginLeft={"50px"}
  zIndex={"0"}
  marginBottom={"30px"}
  style={{
    transition: "background-color 0.3s ease, filter 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#1C1C1C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(70%)"; 
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "#2C2C2C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(100%)"; 
  }}
 >
  <Image
    className="hover-zoom"
    bg={"#f5f6f6"}
    borderTopRadius={"4px"}
    src="https://i.scdn.co/image/ab67616d00001e02ed13f27bdffafaffabef67d5"
    alt="DayDreamer"
   
  />
  <h2 style={{ padding: "5px" }}>DayDreamer</h2>
  <h5 style={{ padding: "5px" }}>Drift away with instrumentals</h5>
  </Box>

   <  Box
    width={"170px"}
  height={"270px"}
  backgroundColor={"#2C2C2C"}
  color={"white"}
  borderRadius={"4px"}
  marginLeft={"50px"}
  style={{
    transition: "background-color 0.3s ease, filter 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#1C1C1C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(70%)"; 
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "#2C2C2C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(100%)"; 
  }}
  >
  <Image
    className="hover-zoom"
    bg={"#f5f6f6"}
    borderTopRadius={"4px"}
    src="https://img.etimg.com/thumb/width-640,height-480,imgsize-52878,resizemode-75,msid-103490511/magazines/panache/shah-rukh-khans-jawan-smashes-pathaan-box-office-record-with-jaw-dropping-day-1-collection-earns-rs-75-cr-domestically/jawan-features-srk-in-a-dual-role-and-was-shot-in-various-locations-across-india-.jpg"
    alt="DayDreamer"
 height={"60%"}
  />
  <h2 style={{ padding: "5px" }}>Hit</h2>
  <h5 style={{ padding: "5px" }}>shahrukh khan hit</h5>
  </Box>
</Flex>




















<p style={{marginLeft:"50px", marginTop:"90px", fontSize:"30px", fontWeight:"bolder", color:"white",}}>Made For You</p>
<Flex
  marginTop={"50px"}
  alignItems={"space-between"}
  justifyContent={"flex-start"}
className='grid'
flexWrap="wrap" 
      gridTemplateColumns={{ base: "1fr", md: "repeat(4, 1fr)", sm:"repeat(3,1fr" }} 
      
      gridGap={"20px"}
 >
<Box
  width={"170px"}
  height={"270px"}
  backgroundColor={"#2C2C2C"}
  color={"white"}
  borderRadius={"4px"}
  marginLeft={"50px"}
  marginBottom={"30px"}
  style={{
    transition: "background-color 0.3s ease, filter 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#1C1C1C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(70%)"; 
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "#2C2C2C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(100%)"; 
  }}
>
  <Image
    className="hover-zoom"
    bg={"#f5f6f6"}
    borderTopRadius={"4px"}
    src="https://hindi.starsunfolded.com/wp-content/uploads/2018/06/A.-R.-Rahman.jpg"
    alt="DayDreamer"
   width={"100%"}
   height={"65%"}
  />
  <h2 style={{ padding: "5px" }}>Daily Mix 1</h2>
  <h5 style={{ padding: "5px" }}>A.R. Rahman, Pritam, Atif and more</h5>
</Box>

<Box
  width={"170px"}
  height={"270px"}
  backgroundColor={"#2C2C2C"}
  color={"white"}
  borderRadius={"4px"}
  marginLeft={"50px"}
  style={{
    transition: "background-color 0.3s ease, filter 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#1C1C1C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(70%)"; 
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "#2C2C2C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(100%)"; 
  }}
>
  <Image
    className="hover-zoom"
    bg={"#f5f6f6"}
    borderTopRadius={"4px"}
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv_VkofGD8QHFmCH_gPCBQbu2IwtfX2d_mCNrIIqGCyVdHUFJtyOVquPFFqHu8-fK75jA&usqp=CAU"
    alt="DayDreamer"
    width={"100%"}
    height={"65%"}
  />
  <h2 style={{ padding: "5px" }}>Daily Mix 2</h2>
  <h5 style={{ padding: "5px" }}>Bilal saeed, Jaz Dhami, Falak Sabbir</h5>
</Box>

<Box
  width={"170px"}
  height={"270px"}
  backgroundColor={"#2C2C2C"}
  color={"white"}
  borderRadius={"4px"}
  marginLeft={"50px"}
  marginBottom={"30px"}
  style={{
    transition: "background-color 0.3s ease, filter 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#1C1C1C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(70%)"; 
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "#2C2C2C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(100%)"; 
  }}
>
  <Image
    className="hover-zoom"
    bg={"#f5f6f6"}
    borderTopRadius={"4px"}
    src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-629423666-1486249634.jpg"
    alt="DayDreamer"
    width={"100%"}
    height={"65%"}
  />
  <h2 style={{ padding: "5px" }}>Daily Mix 3</h2>
  <h5 style={{ padding: "5px" }}>Billie Elish, the chainsmokers</h5>
</Box>

<Box
  width={"170px"}
  height={"270px"}
  backgroundColor={"#2C2C2C"}
  color={"white"}
  borderRadius={"4px"}
  marginLeft={"50px"}
  style={{
    transition: "background-color 0.3s ease, filter 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#1C1C1C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(70%)"; 
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "#2C2C2C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(100%)"; 
  }}
>
  <Image
    className="hover-zoom"
    bg={"#f5f6f6"}
    borderTopRadius={"4px"}
    src="https://static.toiimg.com/thumb/msid-88490133,width-1280,resizemode-4/88490133.jpg"
    alt="DayDreamer"
    width={"100%"}
    height={"65%"}
  />
  <h2 style={{ padding: "5px" }}>Daily Mix 4</h2>
  <h5 style={{ padding: "5px" }}>Inder chahal, jass manak</h5>
</Box>

<Box
  width={"170px"}
  height={"270px"}
  backgroundColor={"#2C2C2C"}
  color={"white"}
  borderRadius={"4px"}
  marginLeft={"50px"}
  style={{
    transition: "background-color 0.3s ease, filter 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#1C1C1C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(70%)"; 
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "#2C2C2C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(100%)"; 
  }}
>
  <Image
    className="hover-zoom"
    bg={"#f5f6f6"}
    borderTopRadius={"4px"}
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYpyLBJKUyWmOad2tMKpPfvz7nAR1XPJ01ZvMcpK-plQ5_z92Pu1KMvJcR0Ga-TAXSFTw&usqp=CAU"
    alt="DayDreamer"
    width={"100%"}
    height={"65%"}
  />
  <h2 style={{ padding: "5px" }}>Daily Mix 5</h2>
  <h5 style={{ padding: "5px" }}>B praak, tanisk bagchi</h5>
</Box>
</Flex>

 






<p style={{marginLeft:"50px", marginTop:"90px",fontSize:"30px", fontWeight:"bolder", color:"white"}}>Your top mixes</p>
<Flex
  marginTop={"50px"}
  justifyContent={"flex-start"}
className='grid'
flexWrap="wrap" 
      gridTemplateColumns={{ base: "1fr", md: "repeat(4, 1fr)", sm:"repeat(3,1fr" }} 
 >
<Box
  width={"170px"}
  height={"270px"}
  backgroundColor={"#2C2C2C"}
  color={"white"}
  borderRadius={"4px"}
  marginLeft={"50px"}
  marginBottom={"30px"}
  style={{
    transition: "background-color 0.3s ease, filter 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#1C1C1C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(70%)"; 
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "#2C2C2C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(100%)"; 
  }}
>
  <Image
    className="hover-zoom"
    bg={"#f5f6f6"}
    borderTopRadius={"4px"}
    src="https://hindi.starsunfolded.com/wp-content/uploads/2018/06/A.-R.-Rahman.jpg"
    alt="DayDreamer"
   width={"100%"}
   height={"65%"}
  />
  <h2 style={{ padding: "5px" }}>Romantic Mix</h2>
  <h5 style={{ padding: "5px" }}>Sachet tondon, Pritam, shreya ghoshal</h5>
</Box>

<Box
  width={"170px"}
  height={"270px"}
  backgroundColor={"#2C2C2C"}
  color={"white"}
  borderRadius={"4px"}
  marginLeft={"50px"}
  style={{
    transition: "background-color 0.3s ease, filter 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#1C1C1C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(70%)"; 
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "#2C2C2C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(100%)"; 
  }}
>
  <Image
    className="hover-zoom"
    bg={"#f5f6f6"}
    borderTopRadius={"4px"}
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4yM0K4R9Pi8_ynE7iMU4Ufr6OQAbl5bPfQ2T6LDix7NiFosmfZEc7C-2hlzaeVdFnYiw&usqp=CAU"
    alt="DayDreamer"
    width={"100%"}
    height={"65%"}
  />
  <h2 style={{ padding: "5px" }}>kailash kher mix</h2>
  <h5 style={{ padding: "5px" }}>mustafa, zahid, papon</h5>
</Box>

<Box
  width={"170px"}
  height={"270px"}
  backgroundColor={"#2C2C2C"}
  color={"white"}
  borderRadius={"4px"}
  marginLeft={"50px"}
  style={{
    transition: "background-color 0.3s ease, filter 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#1C1C1C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(70%)"; 
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "#2C2C2C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(100%)"; 
  }}
>
  <Image
    className="hover-zoom"
    bg={"#f5f6f6"}
    borderTopRadius={"4px"}
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm5KyAoGSJ75FK2bFbpfSeC6T-6rcR0i16Qcs8XdrgAia-Pa5FsM4hEtUWCz5hjpPk2LM&usqp=CAU"
    alt="DayDreamer"
    width={"100%"}
    height={"65%"}
  />
  <h2 style={{ padding: "5px" }}>pritam Mix</h2>
  <h5 style={{ padding: "5px" }}>Sachet tondon, madan mohan</h5>
</Box>

<Box
  width={"170px"}
  height={"270px"}
  backgroundColor={"#2C2C2C"}
  color={"white"}
  borderRadius={"4px"}
  marginLeft={"50px"}
  marginBottom={"30px"}
  style={{
    transition: "background-color 0.3s ease, filter 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#1C1C1C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(70%)"; 
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "#2C2C2C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(100%)"; 
  }}
>
  <Image
    className="hover-zoom"
    bg={"#f5f6f6"}
    borderTopRadius={"4px"}
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_OZk-xltoC6XCd-SW8VeaO-X1AwjgMX3mf7lrM7M0Tc20zN8USvbm26uuL464PCGXD2w&usqp=CAU"
    alt="DayDreamer"
    width={"100%"}
    height={"65%"}
  />
  <h2 style={{ padding: "5px" }}>madan mohan mix</h2>
  <h5 style={{ padding: "5px" }}>vishal shekhar, javed ali</h5>
</Box>

<Box
  width={"170px"}
  height={"270px"}
  backgroundColor={"#2C2C2C"}
  color={"white"}
  borderRadius={"4px"}
  marginLeft={"50px"}
  style={{
    transition: "background-color 0.3s ease, filter 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#1C1C1C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(70%)"; 
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "#2C2C2C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(100%)"; 
  }}
>
  <Image
    className="hover-zoom"
    bg={"#f5f6f6"}
    borderTopRadius={"4px"}
    src="https://i.scdn.co/image/5bb443424a1ad71603c43d67f5af1a04da6bb3c8"
    alt="DayDreamer"
    width={"100%"}
    height={"65%"}
  />
  <h2 style={{ padding: "5px" }}>moody mix</h2>
  <h5 style={{ padding: "5px" }}>lewis capaldi, one direction</h5>
</Box>
</Flex>








<p style={{marginLeft:"50px", marginTop:"90px",  fontSize:"30px", fontWeight:"bolder", color:"white"}}>Based on your recent listening</p>
<Flex
  marginTop={"50px"}
  justifyContent={"flex-start"}
className='grid'
flexWrap="wrap" 
      gridTemplateColumns={{ base: "1fr", md: "repeat(4, 1fr)", sm:"repeat(3,1fr" }} 
 >
<Box
  width={"170px"}
  height={"270px"}
  backgroundColor={"#2C2C2C"}
  color={"white"}
  borderRadius={"4px"}
  marginLeft={"50px"}
  marginBottom={"30px"}
  style={{
    transition: "background-color 0.3s ease, filter 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#1C1C1C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(70%)"; 
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "#2C2C2C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(100%)"; 
  }}
>
  <Image
    className="hover-zoom"
    bg={"#f5f6f6"}
    borderTopRadius={"4px"}
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeNmVNiq0WvuG9OM_ArE09vqm_i5F5LxI6Tg&usqp=CAU"
    alt="DayDreamer"
   width={"100%"}
   height={"65%"}
  />
  <h2 style={{ padding: "5px" }}>Bollywood and chill</h2>
  <h5 style={{ padding: "5px" }}>wind down the summer heat with...</h5>
</Box>

<Box
  width={"170px"}
  height={"270px"}
  backgroundColor={"#2C2C2C"}
  color={"white"}
  borderRadius={"4px"}
  marginLeft={"50px"}
  style={{
    transition: "background-color 0.3s ease, filter 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#1C1C1C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(70%)"; 
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "#2C2C2C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(100%)"; 
  }}
>
  <Image
    className="hover-zoom"
    bg={"#f5f6f6"}
    borderTopRadius={"4px"}
    src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/romantic-song-lyrics-beach-boys-1578951298.jpg"
    alt="DayDreamer"
    width={"100%"}
    height={"65%"}
  />
  <h2 style={{ padding: "5px" }}>pov: you are in love</h2>
  <h5 style={{ padding: "5px" }}>uff, you've fallen</h5>
</Box>

<Box
  width={"170px"}
  height={"270px"}
  backgroundColor={"#2C2C2C"}
  color={"white"}
  borderRadius={"4px"}
  marginLeft={"50px"}
  style={{
    transition: "background-color 0.3s ease, filter 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#1C1C1C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(70%)"; 
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "#2C2C2C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(100%)"; 
  }}
>
  <Image
    className="hover-zoom"
    bg={"#f5f6f6"}
    borderTopRadius={"4px"}
    src="https://i1.sndcdn.com/avatars-000274338599-fmrxfy-t240x240.jpg"
    alt="DayDreamer"
    width={"100%"}
    height={"65%"}
  />
  <h2 style={{ padding: "5px" }}>hangover cure</h2>
  <h5 style={{ padding: "5px" }}>trust us, you need this!</h5>
</Box>

<Box
  width={"170px"}
  height={"270px"}
  backgroundColor={"#2C2C2C"}
  color={"white"}
  borderRadius={"4px"}
  marginLeft={"50px"}
  marginBottom={"30px"}
  style={{
    transition: "background-color 0.3s ease, filter 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#1C1C1C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(70%)"; 
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "#2C2C2C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(100%)"; 
  }}
>
  <Image
    className="hover-zoom"
    bg={"#f5f6f6"}
    borderTopRadius={"4px"}
    src="https://m.timesofindia.com/photo/102170694/102170694.jpg"
    alt="DayDreamer"
    width={"100%"}
    height={"65%"}
  />
  <h2 style={{ padding: "5px" }}>top hindi</h2>
  <h5 style={{ padding: "5px" }}>catch the most...</h5>
</Box>

<Box
  width={"170px"}
  height={"270px"}
  backgroundColor={"#2C2C2C"}
  color={"white"}
  borderRadius={"4px"}
  marginLeft={"50px"}
  style={{
    transition: "background-color 0.3s ease, filter 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#1C1C1C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(70%)"; 
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "#2C2C2C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(100%)"; 
  }}
>
  <Image
    className="hover-zoom"
    bg={"#f5f6f6"}
    borderTopRadius={"4px"}
    src="https://m.media-amazon.com/images/M/MV5BOWFjZjU2ZjEtZTJlOC00ZWUxLTg1M2YtZmJhYmIyM2U2ZWEzXkEyXkFqcGdeQXVyNjM0NDA2MTk@._V1_.jpg"
    alt="DayDreamer"
    width={"100%"}
    height={"65%"}
  />
  <h2 style={{ padding: "5px" }}>Music shuttle</h2>
  <h5 style={{ padding: "5px" }}>get in for the musical commute</h5>
</Box>
</Flex>







<p style={{marginLeft:"50px", marginTop:"90px",fontSize:"30px", fontWeight:"bolder", color:"white"}}>Best of artists</p>
<Flex
  marginTop={"50px"}
  justifyContent={"flex-start"}
className='grid'
flexWrap="wrap" 
      gridTemplateColumns={{ base: "1fr", md: "repeat(4, 1fr)", sm:"repeat(3,1fr" }} 
 >
<Box
  width={"170px"}
  height={"270px"}
  backgroundColor={"#2C2C2C"}
  color={"white"}
  borderRadius={"4px"}
  marginLeft={"50px"}
  marginBottom={"30px"}
  style={{
    transition: "background-color 0.3s ease, filter 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#1C1C1C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(70%)"; 
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "#2C2C2C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(100%)"; 
  }}
>
  <Image
    className="hover-zoom"
    bg={"#f5f6f6"}
    borderTopRadius={"4px"}
    src="https://m.media-amazon.com/images/M/MV5BMTNmMTQ2YzMtYzU0MS00NTI2LTk3MTgtOTI5MDgyNDc3ZDFkXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_FMjpg_UX1000_.jpg"
    alt="DayDreamer"
   width={"100%"}
   height={"65%"}
  />
  <h2 style={{ padding: "5px" }}>This is arijit</h2>
  <h5 style={{ padding: "5px" }}>bollywood corner</h5>
</Box>

<Box
  width={"170px"}
  height={"270px"}
  backgroundColor={"#2C2C2C"}
  color={"white"}
  borderRadius={"4px"}
  marginLeft={"50px"}
  style={{
    transition: "background-color 0.3s ease, filter 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#1C1C1C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(70%)"; 
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "#2C2C2C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(100%)"; 
  }}
>
  <Image
    className="hover-zoom"
    bg={"#f5f6f6"}
    borderTopRadius={"4px"}
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9DkMtktL3SZZcuuSEpIBi6icKSCGEW6yADS7nBomWmt8M6QIIvvIUgeqj6imrxaJ0h1Q&usqp=CAU"
    alt="DayDreamer"
    width={"100%"}
    height={"65%"}
  />
  <h2 style={{ padding: "5px" }}>this is pritam</h2>
  <h5 style={{ padding: "5px" }}>tracks</h5>
</Box>

<Box
  width={"170px"}
  height={"270px"}
  backgroundColor={"#2C2C2C"}
  color={"white"}
  borderRadius={"4px"}
  marginLeft={"50px"}
  style={{
    transition: "background-color 0.3s ease, filter 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#1C1C1C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(70%)"; 
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "#2C2C2C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(100%)"; 
  }}
>
  <Image
    className="hover-zoom"
    bg={"#f5f6f6"}
    borderTopRadius={"4px"}
    src="https://starsunfolded.com/wp-content/uploads/2017/01/Mohit-Chauhan.jpg"
    alt="DayDreamer"
    width={"100%"}
    height={"65%"}
  />
  <h2 style={{ padding: "5px" }}>this is mohit chouhan</h2>
  <h5 style={{ padding: "5px" }}>the essential tracks</h5>
</Box>

<Box
  width={"170px"}
  height={"270px"}
  backgroundColor={"#2C2C2C"}
  color={"white"}
  borderRadius={"4px"}
  marginLeft={"50px"}
  marginBottom={"30px"}
  style={{
    transition: "background-color 0.3s ease, filter 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#1C1C1C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(70%)"; 
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "#2C2C2C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(100%)"; 
  }}
>
  <Image
    className="hover-zoom"
    bg={"#f5f6f6"}
    borderTopRadius={"4px"}
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTliccv6giurxju2d60FItEs_aLiqM0yLwtw8B3Ta7IZZKmV5k9MDoNV2FvV5IpMqzzUTM&usqp=CAU"
    alt="DayDreamer"
    width={"100%"}
    height={"65%"}
  />
  <h2 style={{ padding: "5px" }}>this is atif aslam</h2>
  <h5 style={{ padding: "5px" }}>atif</h5>
</Box>

<Box
  width={"170px"}
  height={"270px"}
  backgroundColor={"#2C2C2C"}
  color={"white"}
  borderRadius={"4px"}
  marginLeft={"50px"}
  style={{
    transition: "background-color 0.3s ease, filter 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#1C1C1C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(70%)"; 
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "#2C2C2C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(100%)"; 
  }}
>
  <Image
    className="hover-zoom"
    bg={"#f5f6f6"}
    borderTopRadius={"4px"}
    src="https://starsunfolded.com/wp-content/uploads/2016/10/Mithoon-1.jpg"
    alt="DayDreamer"
    width={"100%"}
    height={"65%"}
  />
  <h2 style={{ padding: "5px" }}>this is mithhon</h2>
  <h5 style={{ padding: "5px" }}>mithhon essentials</h5>
</Box>
</Flex>







<p style={{marginLeft:"50px", marginTop:"90px",fontSize:"30px", fontWeight:"bolder", color:"white"}}>India's best</p>
<Flex
  marginTop={"50px"}
  justifyContent={"flex-start"}
className='grid'
flexWrap="wrap" 
      gridTemplateColumns={{ base: "1fr", md: "repeat(4, 1fr)", sm:"repeat(3,1fr" }} 
 >
<Box
  width={"170px"}
  height={"270px"}
  backgroundColor={"#2C2C2C"}
  color={"white"}
  borderRadius={"4px"}
  marginLeft={"50px"}
  marginBottom={"30px"}
  style={{
    transition: "background-color 0.3s ease, filter 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#1C1C1C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(70%)"; 
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "#2C2C2C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(100%)"; 
  }}
>
  <Image
    className="hover-zoom"
    bg={"#f5f6f6"}
    borderTopRadius={"4px"}
    src="https://c.saavncdn.com/editorial/LatestPunjabiHits_20230411064330_500x500.jpg"
    alt="DayDreamer"
   width={"100%"}
   height={"65%"}
  />
  <h2 style={{ padding: "5px" }}>punjabi 101</h2>
  <h5 style={{ padding: "5px" }}>ultimate punjabi</h5>
</Box>

<Box
  width={"170px"}
  height={"270px"}
  backgroundColor={"#2C2C2C"}
  color={"white"}
  borderRadius={"4px"}
  marginLeft={"50px"}
  style={{
    transition: "background-color 0.3s ease, filter 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#1C1C1C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(70%)"; 
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "#2C2C2C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(100%)"; 
  }}
>
  <Image
    className="hover-zoom"
    bg={"#f5f6f6"}
    borderTopRadius={"4px"}
    src="https://i.scdn.co/image/ab67706f000000022498d88e56c569e17d7a477a"
    alt="DayDreamer"
    width={"100%"}
    height={"65%"}
  />
  <h2 style={{ padding: "5px" }}>RADAR India</h2>
  <h5 style={{ padding: "5px" }}>Indian</h5>
</Box>

<Box
  width={"170px"}
  height={"270px"}
  backgroundColor={"#2C2C2C"}
  color={"white"}
  borderRadius={"4px"}
  marginLeft={"50px"}
  style={{
    transition: "background-color 0.3s ease, filter 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#1C1C1C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(70%)"; 
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "#2C2C2C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(100%)"; 
  }}
>
  <Image
    className="hover-zoom"
    bg={"#f5f6f6"}
    borderTopRadius={"4px"}
    src="https://c.saavncdn.com/editorial/logo/BollywoodUnwindJio_20190502150134.jpg"
    alt="DayDreamer"
    width={"100%"}
    height={"65%"}
  />
  <h2 style={{ padding: "5px" }}>Bollywood butter</h2>
  <h5 style={{ padding: "5px" }}>blockbuster</h5>
</Box>

<Box
  width={"170px"}
  height={"270px"}
  backgroundColor={"#2C2C2C"}
  color={"white"}
  borderRadius={"4px"}
  marginLeft={"50px"}
  marginBottom={"30px"}
  style={{
    transition: "background-color 0.3s ease, filter 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#1C1C1C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(70%)"; 
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "#2C2C2C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(100%)"; 
  }}
>
  <Image
    className="hover-zoom"
    bg={"#f5f6f6"}
    borderTopRadius={"4px"}
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMfm93MBpgH-lhuOys9UKdVbrcr6hfPImOjw&usqp=CAU"
    alt="DayDreamer"
    width={"100%"}
    height={"65%"}
  />
  <h2 style={{ padding: "5px" }}>RAP 91</h2>
  <h5 style={{ padding: "5px" }}>best hip-hop</h5>
</Box>

<Box
  width={"170px"}
  height={"270px"}
  backgroundColor={"#2C2C2C"}
  color={"white"}
  borderRadius={"4px"}
  marginLeft={"50px"}
  style={{
    transition: "background-color 0.3s ease, filter 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#1C1C1C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(70%)"; 
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "#2C2C2C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(100%)"; 
  }}
>
  <Image
    className="hover-zoom"
    bg={"#f5f6f6"}
    borderTopRadius={"4px"}
    src="https://i.scdn.co/image/ab67706c0000da84761031be13f037614aabb110"
    alt="DayDreamer"
    width={"100%"}
    height={"65%"}
  />
  <h2 style={{ padding: "5px" }}>tollywood pearls</h2>
  <h5 style={{ padding: "5px" }}>finest set of telugu</h5>
</Box>
</Flex>








<p style={{marginLeft:"50px", marginTop:"90px", fontSize:"30px", fontWeight:"bolder", color:"white"}}>More like Sachet Tondon</p>
<Flex
  marginTop={"50px"}
  justifyContent={"flex-start"}
className='grid'
flexWrap="wrap" 
margin={"20px"}
      gridTemplateColumns={{ base: "1fr", md: "repeat(4, 1fr)", sm:"repeat(3,1fr" }} 
 >
<Box
  width={"170px"}
  height={"270px"}
  backgroundColor={"#2C2C2C"}
  color={"white"}
  borderRadius={"4px"}
  marginLeft={"50px"}
  marginBottom={"30px"}
  style={{
    transition: "background-color 0.3s ease, filter 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#1C1C1C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(70%)"; 
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "#2C2C2C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(100%)"; 
  }}
>
  <Image
    className="hover-zoom"
    bg={"#f5f6f6"}
    borderTopRadius={"4px"}
    src="https://i1.sndcdn.com/artworks-7Vncz7yveMv6bsWx-CO3RjQ-t500x500.jpg"
    alt="DayDreamer"
   width={"100%"}
   height={"65%"}
  />
  <h2 style={{ padding: "5px" }}>pop chill</h2>
  <h5 style={{ padding: "5px" }}>escape</h5>
</Box>

<Box
  width={"170px"}
  height={"270px"}
  backgroundColor={"#2C2C2C"}
  color={"white"}
  borderRadius={"4px"}
  marginLeft={"50px"}
  style={{
    transition: "background-color 0.3s ease, filter 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#1C1C1C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(70%)"; 
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "#2C2C2C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(100%)"; 
  }}
>
  <Image
    className="hover-zoom"
    bg={"#f5f6f6"}
    borderTopRadius={"4px"}
    src="https://m.media-amazon.com/images/M/MV5BOWI5NmU3NTUtOTZiMS00YzA1LThlYTktNDJjYTU5NDFiMDUxXkEyXkFqcGdeQXVyMTUzNjEwNjM2._V1_FMjpg_UX1000_.jpg"
    alt="DayDreamer"
    width={"100%"}
    height={"65%"}
  />
  <h2 style={{ padding: "5px" }}>trending</h2>
  <h5 style={{ padding: "5px" }}>jawan</h5>
</Box>

<Box
  width={"170px"}
  height={"270px"}
  backgroundColor={"#2C2C2C"}
  color={"white"}
  borderRadius={"4px"}
  marginLeft={"50px"}
  marginBottom={"30px"}
  style={{
    transition: "background-color 0.3s ease, filter 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#1C1C1C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(70%)"; 
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "#2C2C2C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(100%)"; 
  }}
>
  <Image
    className="hover-zoom"
    bg={"#f5f6f6"}
    borderTopRadius={"4px"}
    src="https://wikibio.in/wp-content/uploads/2020/09/Manoj-Muntashir.jpg"
    alt="DayDreamer"
    width={"100%"}
    height={"65%"}
  />
  <h2 style={{ padding: "5px" }}>manoj muntashir</h2>
  <h5 style={{ padding: "5px" }}>emotional, traditional</h5>
</Box>

<Box
  width={"170px"}
  height={"270px"}
  backgroundColor={"#2C2C2C"}
  color={"white"}
  borderRadius={"4px"}
  marginLeft={"50px"}
  style={{
    transition: "background-color 0.3s ease, filter 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#1C1C1C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(70%)"; 
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "#2C2C2C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(100%)"; 
  }}
>
  <Image
    className="hover-zoom"
    bg={"#f5f6f6"}
    borderTopRadius={"4px"}
    src="https://celebwale.com/wp-content/uploads/2023/01/Sachet-Tandon.webp"
    alt="DayDreamer"
    width={"100%"}
    height={"65%"}
  />
  <h2 style={{ padding: "5px" }}>sachet tondon</h2>
  <h5 style={{ padding: "5px" }}>by saregama</h5>
</Box>

<Box
  width={"170px"}
  height={"270px"}
  backgroundColor={"#2C2C2C"}
  color={"white"}
  borderRadius={"4px"}
  marginLeft={"50px"}
  marginBottom={"30px"}
  style={{
    transition: "background-color 0.3s ease, filter 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#1C1C1C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(70%)"; 
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "#2C2C2C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(100%)"; 
  }}
>
  <Image
    className="hover-zoom"
    bg={"#f5f6f6"}
    borderTopRadius={"4px"}
    src="https://m.media-amazon.com/images/M/MV5BOTc1OTU4NGQtZGMwYy00OGEyLWE4NmYtZTZlOTNkYmNmYTlhXkEyXkFqcGdeQXVyNDAzNDk0MTQ@._V1_.jpg"
    alt="DayDreamer"
    width={"100%"}
    height={"65%"}
  />
  <h2 style={{ padding: "5px" }}>dil ko karar aya</h2>
  <h5 style={{ padding: "5px" }}>yessar desai</h5>
</Box>
</Flex>








<p style={{marginLeft:"50px", marginTop:"90px", fontSize:"30px", fontWeight:"bolder", color:"white"}}>Throwback</p>
<Flex
  marginTop={"50px"}
  justifyContent={"flex-start"}
  className='grid'
  flexWrap="wrap" 
      gridTemplateColumns={{ base: "1fr", md: "repeat(4, 1fr)", sm:"repeat(3,1fr" }} 
 >
<Box
  width={"170px"}
  height={"270px"}
  backgroundColor={"#2C2C2C"}
  color={"white"}
  borderRadius={"4px"}
  marginLeft={"50px"}
  marginBottom={"30px"}
  style={{
    transition: "background-color 0.3s ease, filter 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#1C1C1C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(70%)"; 
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "#2C2C2C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(100%)"; 
  }}
>
  <Image
    className="hover-zoom"
    bg={"#f5f6f6"}
    borderTopRadius={"4px"}
    src="https://i.scdn.co/image/ab67706f00000003128217f6ecc1036a29759168"
    alt="DayDreamer"
   width={"100%"}
   height={"65%"}
  />
  <h2 style={{ padding: "5px" }}>all out 00's hindi</h2>
  <h5 style={{ padding: "5px" }}>A.R. Rahman, Pritam, Atif and more</h5>
</Box>

<Box
  width={"170px"}
  height={"270px"}
  backgroundColor={"#2C2C2C"}
  color={"white"}
  borderRadius={"4px"}
  marginLeft={"50px"}
  style={{
    transition: "background-color 0.3s ease, filter 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#1C1C1C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(70%)"; 
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "#2C2C2C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(100%)"; 
  }}
>
  <Image
    className="hover-zoom"
    bg={"#f5f6f6"}
    borderTopRadius={"4px"}
    src="https://i.scdn.co/image/ab67616d0000b273af6e757c3a91cd3cec3e429d"
    alt="DayDreamer"
    width={"100%"}
    height={"65%"}
  />
  <h2 style={{ padding: "5px" }}>90s love hits</h2>
  <h5 style={{ padding: "5px" }}>relive 90s</h5>
</Box>

<Box
  width={"170px"}
  height={"270px"}
  backgroundColor={"#2C2C2C"}
  color={"white"}
  borderRadius={"4px"}
  marginLeft={"50px"}
  style={{
    transition: "background-color 0.3s ease, filter 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#1C1C1C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(70%)"; 
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "#2C2C2C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(100%)"; 
  }}
>
  <Image
    className="hover-zoom"
    bg={"#f5f6f6"}
    borderTopRadius={"4px"}
    src="https://i.scdn.co/image/ab67706f0000000222fbce08dcea660cb028daf3"
    width={"100%"}
    height={"65%"}
  />
  <h2 style={{ padding: "5px" }}>90s swagger</h2>
  <h5 style={{ padding: "5px" }}>everything from cheesy</h5>
</Box>

<Box
  width={"170px"}
  height={"270px"}
  backgroundColor={"#2C2C2C"}
  color={"white"}
  borderRadius={"4px"}
  marginLeft={"50px"}
  marginBottom={"30px"}
  style={{
    transition: "background-color 0.3s ease, filter 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#1C1C1C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(70%)"; 
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "#2C2C2C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(100%)"; 
  }}
>
  <Image
    className="hover-zoom"
    bg={"#f5f6f6"}
    borderTopRadius={"4px"}
    src="https://i.scdn.co/image/ab67616d0000b273590e258ee9b43292177078bc"
    alt="DayDreamer"
    width={"100%"}
    height={"65%"}
  />
  <h2 style={{ padding: "5px" }}>90s dance bollywood</h2>
  <h5 style={{ padding: "5px" }}>dhinchak beats</h5>
</Box>

<Box
  width={"170px"}
  height={"270px"}
  backgroundColor={"#2C2C2C"}
  color={"white"}
  borderRadius={"4px"}
  marginLeft={"50px"}
  style={{
    transition: "background-color 0.3s ease, filter 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#1C1C1C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(70%)"; 
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "#2C2C2C"; 
    e.currentTarget.querySelector(".hover-zoom").style.filter = "brightness(100%)"; 
  }}
>
  <Image
    className="hover-zoom"
    bg={"#f5f6f6"}
    borderTopRadius={"4px"}
    src="https://spotify-ui-puce.vercel.app/static/media/allOut.512a9fbc26c50101e462.jpeg"
    alt="DayDreamer"
    width={"100%"}
    height={"65%"}
  />
  <h2 style={{ padding: "5px" }}>all out 2010s</h2>
  <h5 style={{ padding: "5px" }}>biggest songs</h5>
</Box>
</Flex>


    </Box>
    </Box>
  );
}

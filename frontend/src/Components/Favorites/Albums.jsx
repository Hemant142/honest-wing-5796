import React from 'react'
import NoFavoriteSong from './NoFavoriteSong'
import styled from 'styled-components'

const Albums = () => {
const arr=[]
  return (
    arr.length>0?<DIV>
   
      Albums
    
    </DIV>:<NoFavoriteSong/>
  )
}

export default Albums

const DIV= styled.div`
border: 2px solid red;


`
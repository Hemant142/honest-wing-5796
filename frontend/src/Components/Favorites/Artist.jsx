import React from 'react'
import styled from 'styled-components'
import NoFavoriteSong from './NoFavoriteSong'

const Artist = () => {
  const arr=[1]
  return (
    arr.length>0?<DIV>
      Artist
    </DIV>:<NoFavoriteSong/>
  )
}

export default Artist

const DIV= styled.div`

`
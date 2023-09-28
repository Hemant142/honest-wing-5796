import React from 'react'
import styled from 'styled-components'
import NoFavoriteSong from './NoFavoriteSong'

const Playlists = () => {
  const arr=[]
  return (
    arr.length>0?<DIV>
      palylist
    </DIV>:<NoFavoriteSong/>
  )
}

export default Playlists

const DIV = styled.div`

`
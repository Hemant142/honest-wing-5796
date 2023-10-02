import React from 'react'
import { Box, Skeleton, SkeletonCircle, SkeletonText,Spinner,Stack } from '@chakra-ui/react'
// import { Stack, HStack, VStack } from '@chakra-ui/react'
const Loader = () => {
    // const [isLoaded, setIsLoaded] = React.useState(false)
  return (
    <div style={{margin:"auto"}}>
    <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>
    </div>
  )
}

export default Loader

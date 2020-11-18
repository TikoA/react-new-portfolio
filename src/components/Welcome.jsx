import React from 'react';
import {Box, Text} from '@chakra-ui/core'

function Welcome() {

  return (
    <>
      <Box
        display='flex'
        justifyContent='center' 
        alignItems='center' 
        width='100%' 
        flexDirection='column'
        backgroundColor='blue.500' 
        height='100vh'
      >
        <Text fontFamily='Franklin Gothic Medium' fontSize='45px' fontWeight='600'>
          Tiko Arshakyan
        </Text>

        <Text marginBottom='2rem' fontFamily='Franklin Gothic Medium' fontSize={['30px','45px']} fontWeight='600'>
          Front-End developer
        </Text>
        <Box color='#181616' display="flex">
          <a href='https://github.com/TikoA'><Text fontSize='6xl'><i class="devicon-github-plain colored"></i></Text></a>
          <a style={{marginLeft: '2rem'}} href='https://www.linkedin.com/in/%D1%82%D0%B8%D0%B3%D1%80%D0%B0%D0%BD-%D0%B0%D1%80%D1%88%D0%B0%D0%BA%D1%8F%D0%BD-6b56a61a9/'><Text fontSize='6xl'><i class="devicon-linkedin-plain"></i></Text></a>
        </Box>
       </Box>
    </>
  );
}

export default Welcome;
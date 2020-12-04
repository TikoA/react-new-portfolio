import React from 'react';
import {Box, Image, Text} from '@chakra-ui/core'

function Welcome({lang, setLang}) {
  let info;

  switch (lang) {
    case 'EN':
      info = {
        name: 'Tiko Arshakyan',
        position: 'Front-End Developer'
      }
      break;
    case 'DE':
      info = {
        name: 'Tiko Arshakyan',
        position: 'Front-End Entwickler'
      }
      break; 
    case 'RU':
      info = {
        name: 'Тигран Аршакян',
        position: 'Front-End Разработчик'
      }
      break;     
    case 'AM':
      info = {
        name: 'Տիգրան Արշակյան',
        position: 'Front-End Ծրագրավորող'
      }
      break;
    default:
      break;
  }
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
          {info.name}
        </Text>

        <Text marginBottom='2rem' fontFamily='Franklin Gothic Medium' fontSize={['30px','45px']} fontWeight='600'>
          {info.position}
        </Text>
        <Box color='#181616' display="flex">
          <a href='https://github.com/TikoA'><Text fontSize='6xl'><i class="devicon-github-plain colored"></i></Text></a>
          <a style={{marginLeft: '2rem'}} href='https://www.linkedin.com/in/%D1%82%D0%B8%D0%B3%D1%80%D0%B0%D0%BD-%D0%B0%D1%80%D1%88%D0%B0%D0%BA%D1%8F%D0%BD-6b56a61a9/'><Text fontSize='6xl'><i class="devicon-linkedin-plain"></i></Text></a>
        </Box>
        <Box flexWrap='wrap' display='flex'>
          <Image onClick={() => setLang('RU')} margin={2} size='70px' src="https://www.flaticon.com/svg/static/icons/svg/330/330437.svg" />
          <Image onClick={() => setLang('EN')} margin={2} size='70px' src="https://www.flaticon.com/svg/static/icons/svg/330/330459.svg" />
          <Image onClick={() => setLang('DE')} margin={2} size='70px' src="https://www.flaticon.com/svg/static/icons/svg/330/330523.svg" />
          <Image onClick={() => setLang('AM')} margin={2} size='70px' src="https://www.flaticon.com/svg/static/icons/svg/330/330577.svg" />
        </Box>
       </Box>
    </>
  );
}

export default Welcome;

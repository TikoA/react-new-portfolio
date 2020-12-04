import { Box, Button, Link, Text } from '@chakra-ui/core'

const Skills = ({lang, setLang}) => {
    let info;

    switch (lang) {
      case 'EN':
        info = {
          skill: 'Skills'
        }
        break;
      case 'DE':
        info = {
          skill: 'Sprachkenntnisse'
        }
        break; 
      case 'RU':
        info = {
          skill: 'Навыки'
        }
        break;     
      case 'AM':
        info = {
          skill: 'Հնարհքներ'
        }
        break;
      default:
        break;
    }

    return (
        <Box 
            width='100%' 
            padding='3rem' 
            backgroundColor='gray.700'
            textAlign='center'
        >
            <Text color='white' fontFamily='Mechanical, Franklin Gothic Medium' fontSize='5xl'>{info.skill}</Text>
            <Box display='flex' justifyContent='center' alignItems='center' flexWrap='wrap'>
                <Text marginRight='1rem' fontSize='6xl'><i class="devicon-html5-plain-wordmark colored"></i></Text>
                <Text marginRight='1rem' fontSize='6xl'><i class="devicon-vuejs-plain colored"></i></Text>
                <Text marginRight='1rem' fontSize='6xl'><i class="devicon-css3-plain-wordmark colored"></i></Text>
                <Text marginRight='1rem' fontSize='6xl'><i class="devicon-nodejs-plain colored"></i></Text>
                <Text marginRight='1rem' fontSize='6xl'><i class="devicon-javascript-plain colored"></i></Text>
                <Text marginRight='1rem' fontSize='6xl'><i class="devicon-react-original colored"></i></Text>
                <Text marginRight='1rem' fontSize='6xl'><i class="devicon-typescript-plain colored"></i></Text>
                <Text marginRight='1rem' fontSize='6xl'><i class="devicon-git-plain colored"></i></Text>
                <Text marginRight='1rem' fontSize='6xl'><i class="devicon-mongodb-plain colored"></i></Text>
                <Text marginRight='1rem' fontSize='6xl'><i class="devicon-yarn-plain colored"></i></Text>
                <Text marginRight='1rem' fontSize='6xl'><i class="devicon-webpack-plain colored"></i></Text>
                <Text marginRight='1rem' fontSize='6xl'><i class="devicon-photoshop-line colored"></i></Text>
                <Text marginRight='1rem' fontSize='6xl'><i class="devicon-google-plain colored"></i></Text>
                <Text marginRight='1rem' fontSize='6xl'><i class="devicon-heroku-plain colored"></i></Text>
                <Text marginRight='1rem' fontSize='6xl'><i class="devicon-python-plain colored"></i></Text>
                <Text marginRight='1rem' fontSize='6xl'><i class="devicon-webstorm-plain colored"></i></Text>
            </Box>
            <a href="https://www.freecodecamp.org/certification/tikoa/front-end-libraries" style={{textDecoration: 'none'}}>
                <Button colorScheme="blue" marginTop="1rem">My FCC certificate</Button>
            </a>
        </Box>
    )
}

export default Skills;

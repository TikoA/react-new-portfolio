const { Box, Image, Text, Stack, Badge, Link, Divider } = require("@chakra-ui/core")


const About = ({lang, setLang}) => {
    let info;

    switch (lang) {
      case 'EN':
        info = {
          about: `I am self-taught front-end (full-stack) web developer from Yerevan 
                    learning new technologies every day constantly from books, internet, youtube, 
                    and other. I like programming and developing, use many frameworks and libraries.
                    I like to expiriment with new frameworks and languages. Visit my github to see all
                    my projects.
                    I support Artsakh and Armenia.`
        }
        break;
      case 'DE':
        info = {
          about: `Ich heiße Tigran Arschakian. Ich bin 16 Jahre alt. Ich wohne in Jerewan (Armenia) und lerne Programming.
                  Ich studiere in PHS und ich liebe nicht die Schule. Ich liebe Arzach und Armenia. Ich liebe React und Vue. Ich bin Javaßkript Entwickler. `
        }
        break; 
      case 'RU':
        info = {
          about: 'Меня зовут Тигран Аршакян, мне 16 лет, я учусь программированию и живу в Ереване (Армения), Учусь новому каждый день, и не боюсь мечтать)'
        }
        break;     
      case 'AM':
        info = {
          about: 'Ես Տիգրան Արշակյանն եմ, 16 տարեկան եմ և սովորում եմ ծրագրավորում ինքնուսուցման մեթոդով։ Սովորում եմ տիրապետել նոր հնարհքների ամեն օր, և գնում եմ առաջ։'
        }
        break;
      default:
        break;
    }

    return (
        <Box 
            display='flex'
            backgroundColor='gray.400' width='100%' padding='2rem'
            justifyContent={['space-between','center'].reverse()}
            flexWrap='wrap'
        >
        <Box
            maxWidth='300px' 
            padding='1rem' 
            marginBottom='1rem'
            border='1px solid lightgray'
            borderRadius='10px'
            backgroundColor='white'
        >
            <Image 
                src='https://www.flaticon.com/svg/static/icons/svg/2634/2634483.svg' 
                borderRadius='10px'
                backgroundColor='gray.300'
                padding='1rem'
            />
            <Divider />
            <Text fontSize='xl'>Tigran</Text>
            <Stack isInline>
                <Badge variantColor="green">Developer</Badge>
                <Badge variantColor="red">Front-End</Badge>
                <Badge variantColor="orange">Full-Stack</Badge>
            </Stack>
        </Box>

        <Box maxWidth='700px'>
            <Box 
                backgroundColor='gray.300' 
                width='100%' 
                padding='.1rem' 
                display='flex' 
                justifyContent='start' 
                height='1.4rem'
                borderTopLeftRadius='4px'
                borderTopRightRadius='4px'
            >
                <Box borderRadius='50%' width='.8rem' margin='.2rem' marginRight='10px' backgroundColor='red.400'></Box>
                <Box borderRadius='50%' width='.8rem' margin='.2rem' marginRight='10px' backgroundColor='yellow.400'></Box>
                <Box borderRadius='50%' width='.8rem' margin='.2rem' backgroundColor='green.400'></Box>
            </Box>
            <Box 
                backgroundColor='gray.900'
                height='100%'
                color='white'
                opacity='80%'
                padding='1rem'
                borderBottomLeftRadius='4px'
                borderBottomRightRadius='4px'
            >
                <Text fontFamily="Helvetica" fontSize='md' fontWeight='600' fontSize='1rem'>
                    {info.about} 
                    <Link color='red.500'>#Reco</Link>
                    <Link color='blue.500'>gnizeA</Link>
                    <Link color='orange.500'>rtsakh</Link>
                </Text>
            </Box>
        </Box>

        </Box>
    )
}

export default About

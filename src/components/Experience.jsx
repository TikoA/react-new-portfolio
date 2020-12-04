import { Box, Text, Badge } from '@chakra-ui/core';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience = ({lang, setLang}) => {
    let info;

    switch (lang) {
      case 'EN':
        info = {
            exp: 'Expirience',
            web_student: 'Web Development student',
            front_student: 'Front-End student',
            prog_student: 'Programming student',
            junior_intern: 'Junior Front-End Intern',
            learning: 'Learning'
        }
        break;
      case 'DE':
        info = {
            exp: 'Erfahrung',
          web_student: 'Web-Entwicklung student',
          front_student: 'Front-End student',
          prog_student: 'Programmierung, student',
          junior_intern: 'Junior Front-End Praktikant',
          learning: 'Lernen'
        }
        break; 
      case 'RU':
        info = {
            exp: 'Опыт',
            web_student: 'Студент Веб Программирования',
            front_student: 'Front-End Студент',
            prog_student: 'Студент Программирования',
            junior_intern: 'Junior Front-End Интерн',
            learning: 'Учусь'
        }
        break;     
      case 'AM':
        info = {
            exp: 'Փորձ',
            web_student: 'Վեբ ծրագրավորման ուսանող',
            front_student: 'Front-End ուսանող',
            prog_student: 'Ծրագրավորման Ուսանող',
            junior_intern: 'Կրթսեր Front-End Ինտերն',
            learning: 'Սովորում'
        }
        break;
      default:
        break;
    }
    return (
        <Box width='100%' backgroundColor='pink.400'>
            <Text textAlign='center' color='white' fontWeight='700' fontFamily='Helvetica, Franklin Gothic Medium' fontSize='5xl'>{info.exp}</Text>
            <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#4A5568', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2017 - 2019"
                iconStyle={{ color: '#fff' }}
                icon={<img src='https://www.flaticon.com/svg/static/icons/svg/2621/2621342.svg' />}
            >
                <h3 className="vertical-timeline-element-title">{info.prog_student}</h3>
                <h4 className="vertical-timeline-element-subtitle">TUMO Creative Technologies</h4>
                <Badge margin={2} variantColor="cyan">Programming</Badge>
                <Badge margin={2} variantColor="yellow">JavaScript</Badge>
                <Badge margin={2} variantColor="purple">HTML</Badge>
                <Badge margin={2} variantColor="gray">CSS3</Badge>
                <Badge margin={2} variantColor="blue">Bootstrap</Badge>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#E53E3E', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2019 - 2020"
                iconStyle={{ color: '#fff' }}
                icon={<img src='https://www.flaticon.com/svg/static/icons/svg/1649/1649189.svg' />}
            >
                <h3 className="vertical-timeline-element-title">{info.web_student}</h3>
                <h4 className="vertical-timeline-element-subtitle">IT-KAMASUTRA</h4>
                <Badge margin={2} variantColor="red">React JS</Badge>
                <Badge margin={2} variantColor="green">Redux</Badge>
                <Badge margin={2} variantColor="orange">React-Redux</Badge>
                <Badge margin={2} variantColor="pink">Node JS</Badge>
                <Badge margin={2} variantColor="blue">CSS</Badge>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#805AD5', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2020 - Present"
                iconStyle={{ color: '#fff' }}
                icon={<img src='https://www.flaticon.com/svg/static/icons/svg/919/919831.svg'/>}
            >
                <h3 className="vertical-timeline-element-title">{info.front_student}</h3>
                <h4 className="vertical-timeline-element-subtitle">Teacher: Internet</h4>
                <Badge margin={2} variantColor="cyan">React JS</Badge>
                <Badge margin={2} variantColor="yellow">Redux</Badge>
                <Badge margin={2} variantColor="purple">TailWind</Badge>
                <Badge margin={2} variantColor="gray">Vue</Badge>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#DD6B20', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2020"
                iconStyle={{ color: '#fff' }}
                icon={<img src='https://www.flaticon.com/premium-icon/icons/svg/1183/1183672.svg' />}
            >
                <h3 className="vertical-timeline-element-title">{info.junior_intern}</h3>
                <h4 className="vertical-timeline-element-subtitle">Arshakyan Company Limited</h4>
                <Badge margin={2} variantColor="red">React JS</Badge>
                <Badge margin={2} variantColor="green">Redux</Badge>
                <Badge margin={2} variantColor="orange">Vue</Badge>
                <Badge margin={2} variantColor="pink">Node</Badge>
                <Badge margin={2} variantColor="blue">Chakra</Badge>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#E90F63', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2018 - Present"
                iconStyle={{ color: '#fff' }}
                icon={<img src='https://www.flaticon.com/svg/static/icons/svg/2518/2518007.svg' />}
            >
                <h3 className="vertical-timeline-element-title">{info.learning}</h3>
                <Badge margin={2} variantColor="red">React</Badge>
                <Badge margin={2} variantColor="green">Redux</Badge>
                <Badge margin={2} variantColor="orange">Vue</Badge>
                <Badge margin={2} variantColor="purple">VueX</Badge>
                <Badge margin={2} variantColor="pink">Node</Badge>
                <Badge margin={2} variantColor="blue">Chakra</Badge>
            </VerticalTimelineElement>                       
            </VerticalTimeline>  
        </Box>      
    )
}

export default Experience

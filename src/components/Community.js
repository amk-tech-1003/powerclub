import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'
import comm from './assests/comm1.jfif'
import './community.css'
import Button from 'react-bootstrap/Button'
import Box from '@mui/material/Box';
//import { height, sizing } from '@mui/system';
import dumm from './assests/dummy.png'
//import Navbar from './Navbar.js';

const Community = () => {
    return (<>
        
        <div className='main-content'>
            
            <div className='heading-main'>
                <span className='header-main'>join the fastest growing community now !</span>
            </div>
            <br/><br/>
            <Container fluid="md">
                <Row className='part1'>
                    <Col >
                        <div className='about-commu'>Our community focusses on the saying 
                    <br/>“The more you share knowledge ,the more you gain it” .
                    So our community is a platform where worldwide students can share their
                    knowledge and thus you will come across numerous people with different
                    prespectives which will broaden your prespectives.So what are you waiting for? 
                    join us now !
                    </div>
                    <div className='buttons'>
                        <center>
                        <Button variant="success" size="lg">JOIN US</Button>{' '} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <Button variant="secondary" size="lg">LINK TREE </Button>{' '}
                        </center>
                    </div>
                    
                    </Col>

                    <Col>
                        <img className='image1' src={comm} alt="community" />
                    </Col>
                </Row>
                <Row className='part2'>
                    <Col >
                    <center>
                    <span className='num-mission'>01</span>
                    <h1>Who we are?</h1>
                    <Box color="black" bgcolor="#d5dbd6" height="150%" sx={{ width: '70%'}}>
                        <div className='mission-content'>
                    Peep Power Club is an initiative of Toptrove Foundation which consists of few people who shares a vision to help and enhance the skills of the youth. We make small groups of students and provide all the resources and affordable learning environment. 
                    </div>
                    </Box>
                    </center>
                    
                    </Col>

                    <Col >
                    <center>
                    <span className='num-mission'>02</span>
                    <h1>Our mission</h1>
                    <Box color="black" bgcolor="#d5dbd6" height="150%" sx={{ width: '70%'}}>
                        <div className='mission-content'>
                        Our ultimate mission is to help  many people and provide them with our resources and guide them in their learning process. We also look forward to bridge the gap between the students and resources. We strive to make learning less burdensome.
                        </div>
                    </Box>
                    </center>
                    </Col>

                    <Col >
                    <center>
                    <span className='num-mission'>03</span>
                    <h1>Our Goal</h1>
                    <Box color="black" bgcolor="#d5dbd6" height="150" sx={{ width: '70%'}}>
                        <div className='mission-content'>
                        Peep Power Club gives the opportunity to enhance themselves and works towards the growth of each student. We offer peaceful environment and friendly peers who understand your needs. We make small group of students to learn and grow.                    </div>
                    </Box>
                    </center>
                    </Col>
                </Row>
                <Row className='part3'>
                <span className='header-main'>Perks of Joining </span>
                </Row>
                <Row className='perks'>
                <center>
                <Box color="black" bgcolor="#d5dbd6" sx={{width: '90%'}}>
                <div className='perk-content'>Learn all primary practical skills that help you boost your career from the comfort of your house.</div>
                    </Box>
                    </center>
                </Row>
                
                <Row className='perks'>
                <center>
                <Box color="black" bgcolor="#d5dbd6" sx={{width: '90%'}}>
                <div className='perk-content'>Get a chance to interact with like minded pears from all over the globe and increase your network.</div>
                    </Box>
                    </center>
                </Row>
                
                <Row className='perks'>
                <center>
                <Box color="black" bgcolor="#d5dbd6" sx={{width: '90%'}}>
                <div className='perk-content'>Learn from mentors who are devoted to help you throughout the course and beyond.</div>
                    </Box>
                    </center>
                </Row>
                
                <Row className='perks'>
                <center>
                <Box color="black" bgcolor="#d5dbd6" sx={{width: '90%'}}>
                <div className='perk-content'>Get certified for the skills that you learn and enhance your CV.</div>
                    </Box>
                    </center>
                </Row>
                
                <Row className='perks'>
                <center>
                <Box color="black" bgcolor="#d5dbd6" sx={{width: '90%'}}>
                <div className='perk-content'>The best part it is extremely economical -all this for Rs 200 .</div>
                    </Box>
                    </center>
                </Row>
                <Row className='part4'>
                    <Col>
                    <center>
                    <img className='members' src={dumm}/>
                    <h2>Pratham Seth</h2>
                    <h3>CEO</h3></center>
                    </Col>
                    <Col>
                    <center>
                    <img className='members' src={dumm}/>
                    <h2>Pratham Seth</h2>
                    <h3>CEO</h3></center>
                    </Col> 
                    <Col>
                    <center>
                    <img className='members' src={dumm}/>
                    <h2>Pratham Seth</h2>
                    <h3>CEO</h3></center>
                    </Col>
                    <Col>
                    <center>
                    <img className='members' src={dumm}/>
                    <h2>Pratham Seth</h2>
                    <h3>CEO</h3></center>
                    </Col> 
                </Row>
                <Row className='part5'>
                    <Col>
                    <center>
                    <img className='members' src={dumm}/>
                    <h2>Pratham Seth</h2>
                    <h3>CEO</h3></center>
                    </Col>
                    <Col>
                    <center>
                    <img className='members' src={dumm}/>
                    <h2>Pratham Seth</h2>
                    <h3>CEO</h3></center>
                    </Col> 
                    <Col>
                    <center>
                    <img className='members' src={dumm}/>
                    <h2>Pratham Seth</h2>
                    <h3>CEO</h3></center>
                    </Col>
                    <Col>
                    <center>
                    <img className='members' src={dumm}/>
                    <h2>Pratham Seth</h2>
                    <h3>CEO</h3></center>
                    </Col> 
                </Row>
            </Container>
        </div>
        </>
    )
}

export default Community

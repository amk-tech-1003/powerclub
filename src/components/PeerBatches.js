import React from 'react'
import SideBars from './SideBars.js'
import './Home.css'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import './Peerbatches.css'
import Navbars from './Navbar.js'
import Footer from './Footer.js'

import Col from 'react-bootstrap/Col'


const Home = () => {
    return (
        <div className='main'>
            <div className='nv'><Navbars/></div>
            <div className='all-contents'><SideBars/>
            
            
            <div className='white-part'>
            <div className='heading'>
                PEER LIVE BATCHES
            </div>
            <div className='contents'>
                <center>
                <p className='content-para'>
                Peer Power Club helps to make learning affordable and easy for anyone who possesses a strong desire to learn. We make small groups of students, provide them the environment they need, and make learning an exciting task. Our ultimate mission is to help students and guide them in the process of learning their desirable skills.
                </p>
                <br/>
                <Button variant='secondary' size='lg'><b>PEER BATCHES</b></Button>
                </center>
            </div>
            <br/><br/>

            <div className='circle-divs'>
                <center>
                    <Row>
                        <Col>
                        <div className='cirs'>
                            <b>Live Classes</b><br/>
                        40+hours of Live Classes
                        </div>
                        </Col>
                        <Col>
                        <div className='cirs'>
                        <b>Peer <br/>Discussions</b><br/>
                        15+hours of peer discussion
                        </div>
                        </Col>
                        <Col>
                        <div className='cirs'>
                        <b>Doubts & Queries</b><br/>
                        Doubts & Queries from mentor itself
                        </div>
                        </Col>
                        <Col>
                        <div className='cirs'>
                        <b>Certificate</b><br/>
                        Course Completion Certificate
                        </div>
                        </Col>
                        <Col>
                        <div className='cirs'>
                        <b>Fees</b><br/>
                        The enrollment fees is INR 200 only
                        </div>
                        </Col>
                        <Col>
                        <div className='cirs'>
                        <b>Networking</b><br/>
                        Associate with people of similar goals
                        </div>
                        </Col>
                    </Row>
                </center>   

            </div>{/*cicle-divs ends*/}

            <br/><br/>
            <div className='learns'>
                <div className='heads'>
                    FIND WHAT YOU WANT TO LEARN
                </div>
                <br/>
                <div className='butns'>
                    <center>
                    <Button variant='secondary' size='lg'><h2>Skill Batches</h2></Button>
                    </center>  
                </div>
                <br/>
                <center>
                    <Row>
                        <Col>
                        <div className='boxings'>
                        <div className='heads-box'>
                        DIGITAL MARKETING
                        </div>
                        <div className='box-content'>
                        If you have are persuasive and have a creative side then this course is for you. Learn the ABC’s of digital marketing and become the best in the game
                        </div>
                        <br/>
                        <div className='buts'>
                            <Button variant='secondary' size='lg'><h3>Register Now</h3></Button>
                        </div>
                         </div>
                        </Col>
                        <Col>
                        <div className='boxings'>
                        <div className='heads-box'>
                        STOCK MARKET AND TRADING
                        </div>
                        <div className='box-content'>
                        For the business man in you, learn everything
there is to know about stocks, shares and trading.
                        </div>
                        <br/>
                        <div className='buts'>
                            <Button variant='secondary' size='lg'><h3>Register Now</h3></Button>
                        </div>
                        </div>
                        </Col>
                        <Col>
                        <div className='boxings'>
                        <div className='heads-box'>
                        COMMUNICATION SKILLS & PUBLIC SPEAKING
                        </div>
                        <div className='box-content'>
                        For the leader in you, learn how to communicate in a formal setting and enhance your public speaking skills with the help of this course.
                        </div>
                        <br/>
                        <div className='buts'>
                            <Button variant='secondary' size='lg'><h3>Register Now</h3></Button>
                        </div>
                         </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col>
                        <div className='boxings'>
                        <div className='heads-box'>
                        PYTHON PROGRAMMING
                        </div>
                        <div className='box-content'>
                        For the tech enthusiast in you, learn python a general purpose programming language used for web development, AI, machine learning and developing video game
                        </div>
                        <br/>
                        <div className='buts'>
                            <Button variant='secondary' size='lg'><h3>Register Now</h3></Button>
                        </div>
                        </div>
                        </Col>
                        <Col>
                        <div className='boxings'>
                        <div className='heads-box'>
                        C++ PROGRAMMING
                        </div>
                        <div className='box-content'>
                        C++ is an object oriented programming language which gives a clear structure to programs and allows codes to be reused. So, if you are someone who loves tech then this course if for you.
                        </div>
                        <br/>
                        <div className='buts'>
                            <Button variant='secondary' size='lg'><h3>Register Now</h3></Button>
                        </div>
                         </div>
                        </Col>
                    </Row>
                </center>
                
            </div>{/*learns ends */}

            <br/><br/>
            <div className='why-join'>
                <Row>
                    <Col>
                    <div className='join-head'>
                    <b>Why you should join</b> 
                     <br/>Peer-Batches?
                    </div>
                    </Col>
                    <Col>
                    
                        <Row>
                            <Col>
                            <div className='join-patch'></div>
                            </Col>
                            <Col>
                            <div className='join-patch'></div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <div className='join-patch'></div>
                            </Col>
                            <Col>
                            <div className='join-patch'></div>
                            </Col>
                        </Row>
                   
                    </Col>
                </Row>
            </div>{/*why join ends */}

            <div className='foots'>
                <Footer/>
            </div>
             

            </div>{/*white part ends */}

            </div>
        </div>
    )
}

export default Home

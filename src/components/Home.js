import React from 'react'
import SideBars from './SideBars.js'
import './Home.css'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import homes from './assests/home1.png'
import { Navbar } from 'react-bootstrap'
import Navbars from './Navbar.js'
import peereffect from './assests/peereffect.png'
import bt1 from './assests/batch1.png'
import bt2 from './assests/batch2.png'
import bt3 from './assests/batch3.png'
import bt4 from './assests/batch4.png'



const Home = () => {
    return (
        <div className='main-home'>
            <Navbars/>
            <div className='non-scrollbar'>
            <SideBars/>
            </div>
            <div className='main-white'>
            <div className='heading'>
            INDIA’S FIRST MARKETPLACE FOR PEER BATCHES
            </div>  
            <div className='mentorss'>
            <Container >
                    <Row > 
                        <Col><center>
                        <Button variant="outline-secondary" size="lg"> <h2>Mentors</h2></Button>{' '}</center>
                        </Col>
                        <Col><center>
                        <Button variant="outline-secondary" size="lg"> <h2>Login</h2></Button>{' '}</center>
                        </Col>
                    </Row>
                </Container>
                
                </div>    
                <div className='home-image'>
                    <center>
                    <img className='images1' src={homes} width={250}/></center>
                    </div>    
                    <div className='headings'>
                    LEARN POPULAR SKILLS LIKE<br/>FROM THE BIGGEST MINDS IN INDIA
                    </div>
                    <br/>
                    <center>
                        <Button variant="outline-secondary" size="lg"> <h2>Enroll Now</h2></Button>{' '}</center>
                        <div className='peer-effect'>
                        <div className='heading'>
                         INTRODUCING THE PEER EFFECT
                         </div>
                         <center>
                         <div className='img-peer'>
                             <img src={peereffect} width={500}/>
                         </div>
                         </center>
                        </div>


                        <div className='peer-batch'>
                            <div className='heading'>
                                WHY PEER BATCH ?
                            </div>
                            <div className='batch-content'>
                                <center>
                                <Row>
                                    <Col>
                                    <img src={bt1}/>
                                    <div className='batch-head'>
                                        Foster Peer Learning
                                    </div>
                                    <div className='batch-theory'>
                                    <span>Learn from like minded peers to make the learning process more fun and easy.</span>
                                    </div>
                                    </Col>
                                    <Col>
                                    <img src={bt2}/>
                                    <div className='batch-head'>
                                         Live Doubt Sessions
                                    </div>
                                    <div className='batch-theory'>
                                    <span>Get help from learned mentors who not only clear your doubts but also track your performance.</span>
                                    </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                    <img src={bt3}/>
                                    <div className='batch-head'>
                                        Develop Skills
                                    </div>
                                    <div className='batch-theory'>
                                    <span>Upskill yourself for the future and to broaden your horizons.</span>
                                    </div>
                                    </Col>
                                    <Col>
                                    <img src={bt4}/>
                                    <div className='batch-head'>
                                        Build Confidence
                                    </div>
                                    <div className='batch-theory'>
                                    <span>Learn practical skills and networking to boost your confidence.</span>
                                    </div>
                                    </Col>
                                </Row>
                                </center>
                            </div>
                        </div>


                        <div className='impact'>
                            <div className='heading'>
                                THE IMPACT
                            </div>
                            <div className='impact-content'>
                                <div className='impact-theory'>
                                    Impact the youth by choosing us, get personalised training and attention and reach your best potential with the help of our mentors. With 100+ batches started with student groups,  Peerpower Club stands strong in helping children shape their future.
                                </div>
                                    <div className='impact-circle'>
                                        <center>
                                        <Row>
                                            <Col>
                                            <div className='circles'>
                                            <b>100+</b><br/>
                                            Batches
                                            </div>
                                            </Col>
                                            <Col>
                                            <div className='circles'>
                                            <b>5,000+</b><br/>
                                            Students
                                            Enrolled
                                            </div>
                                            </Col>
                                            <Col>
                                            <div className='circles'>
                                            <b>50+</b><br/>
                                            Mentors
                                            Joined
                                            </div>
                                            </Col>
                                        </Row>
                                        </center>
                                    </div>
                            </div>
                            <div className='journey'>
                            Start your journey of upskilling with <b>Peer Power Club</b>.
                            <center>
                                
                        <Button variant="secondary" color= "#C4C4C4" size="lg"> <h2>Peer Batches</h2></Button>{' '}</center>
                            </div>
                        </div>


                        <div className='reviews'>
                            <div className='heading'>
                                COMMUNITY REVIEWS
                            </div>
                        </div>


                        <div className='adore'>
                            <div className='heading'>
                               A COMMUNITY YOUR WILL ADORE BEING PART OF!
                            </div>
                            <div className='adore-content'>
                                <div className='adore-theory'>
                                By being a part of us you will feel as comfortable as your family. You will get full support from us and we will make sure that you will come across all the opportunities which will help you to groom your career as well as boost up your confidence .We adore you the most and will make you adore us through our work.
                                </div>
                                <div>
                                        <center>
                                        <Row>
                                        <Col>
                                        1
                                        </Col>
                                        <Col>
                                        2
                                        </Col>
                                        <Col>
                                        3
                                        </Col>
                                        </Row>
                                        </center>
                                </div>
                            </div>
                        </div>


                        <div className='contact'>
                            <div className='heading'>
                               A COMMUNITY YOUR WILL ADORE BEING PART OF!
                            </div>
                        </div>

                        </div> {/* white part ends */}

        </div>
    )
}

export default Home

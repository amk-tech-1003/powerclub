import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Footer.css'
import { BsLinkedin } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import Button from 'react-bootstrap/Button'


const Footer = () => {
    return (
        <div className='main-footer'>
        <div className='main-content'>

            <div className='club-link'>
            <center>
                <Row>
                    <Col>
                    <div className='col1-content'>
                    <div className='heads'>
                        PEERPOWER CLUB
                    </div>
                    <div className='desc'>
                    PeerPower.Club is an initiative of Toptrove Foundation. Here, we offer seamless learning opportunities to people all around India. We strive to work for the youth by providing them all the necessary resources and learning friendly environment.
                    </div>
                    </div>
                    <div className='icons'>
                        
                            <BsWhatsapp size="2.5rem"/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <BsLinkedin size="2.5rem"/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <BsInstagram size="2.5rem"/>
                           
                    </div>
                    </Col>
                    <Col>
                    <div className='col2-content'>
                        <div className='heads'>
                            QUICK LINKS
                        </div>
                        <div className='desc'>
                            Community <br/>
                            Peer Batches <br/>
                            mentors <br/>
                            Careers <br/>
                            Contact us <br/>
                            Donate us <br/><br/>
                            <Button variant="secondary" size="lg">Enroll Now</Button>
                        </div>
                    </div>
                    </Col>
                </Row>
            </center>
            </div>
            <div className='copyrights'>
                <center>
                COPYRIGHT © 2021 PEERPOWERCLUB | POWERED BY TOPTROVE FOUNDATION
                </center>
            </div>
        </div>
        </div>
    )
}

export default Footer
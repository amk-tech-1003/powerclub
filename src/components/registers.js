import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { BsLinkedin } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import Button from 'react-bootstrap/Button'
import './registers.css'
import Footer from './Footer.js'
import Navbar from './Navbar';

const registers = () => {
    return (
        <div className='mains'>
            <div className='navs'>
                <Navbar/>
            </div>
            <div className='whites-part'>
               
            <Row>
            
                <Col>
                <div className='heads-content'>
                    WELCOME TO <br/><b>PEERPOWER CLUB</b> !
                </div>
                </Col>

                <Col>
                
                <div className='login-reg'>
                    <div className='log-box'>
                       <div className='box-head'>
                           Register
                           </div> 
                        <hr/>
                        <br/><br/>
                        <div className='log-form'>
                        <form>
                        <div className='user-data'>
                        <label>Username: 
                            <br/>
                        <input type="text" placeholder='Enter your username'/>
                        </label>
                        </div>
                        <br/>
                        <div className='email-data'>
                        <label>Email: 
                            <br/>
                        <input type="email" placeholder='Enter your email'/>
                        </label>
                        </div>
                        <br/>
                        <div className='pass-data'>
                        <label>Password: 
                            <br/>
                        <input type="password" placeholder='Enter your Password'/>
                        </label>
                        </div>
                        <br/>
                        <div className='pass-data'>
                        <label>Confirm Password: 
                            <br/>
                        <input type="password" placeholder='Enter your Password'/>
                        </label>
                        </div>
                       
                        <br/>
                        <center>
                        <div className='sbmt-btns'>
                            <Button variant='secondary'><h3>Registers</h3></Button>
                        </div>
                        <br/>
                        <h3>OR</h3>
                        <br/>
                        <div className='sbmt-btns'>
                            <Button variant='secondary'><h3>Sign in with Google</h3></Button>
                        </div>
                        </center>
                        </form>
                        </div>
                    </div>
                    </div>
                    
                </Col>
               
            </Row>
            
            </div>
            <br/><br/><br/><br/><br/><br/>
            <br/><br/><br/>
            <center>
            <div className='foots'>
                
                <Footer/>
                
            </div>
            </center>
        </div>
    )
}

export default registers
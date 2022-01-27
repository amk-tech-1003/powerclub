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


const Home = () => {
    return (
        <div className='main-home'>
            <Navbars/>
            <div className='non-scrollbar'>
            <SideBars/>
            </div>
            <div className='scroll-bg'>
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
                        <Button variant="outline-secondary" size="lg"> <h2>Mentors</h2></Button>{' '}</center>
                        <h1>hgcusy</h1>
                        <h1>hgcusy</h1>
                        <h1>hgcusy</h1>
                        <h1>hgcusy</h1>
                        <h1>hgcusy</h1>
                        <h1>hgcusy</h1>
                        <h1>hgcusy</h1>
                        <h1>hgcusy</h1>
                        <h1>hgcusy</h1>
                        <h1>hgcusy</h1>
                        <h1>hgcusy</h1>
                        <h1>hgcusy</h1>
                        <h1>hgcusy</h1>
                        <h1>hgcusy</h1>
                        <h1>hgcusy</h1>
                        <h1>hgcusy</h1>
                        <h1>hgcusy</h1>
                        <h1>hgcusy</h1>
                        </div>

        </div>
    )
}

export default Home

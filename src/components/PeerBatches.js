import React from 'react'
import SideBars from './SideBars.js'
import './Home.css'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import './Peerbatches.css'
import Navbars from './Navbar.js'


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
                <p className='content-para'>
                Peer Power Club helps to make learning affordable and easy for anyone who possesses a strong desire to learn.

We make small groups of students, provide them the environment they need, and make learning an exciting task.

Our ultimate mission is to help students and guide them in the process of learning their desirable skills.
                </p>
            </div>
            </div>

            </div>
        </div>
    )
}

export default Home

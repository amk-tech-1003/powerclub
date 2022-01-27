import React from 'react'
import './SideBars.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import dumm from './assests/dummy.png'
import { BsLinkedin } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import Button from 'react-bootstrap/Button'

const SideBars = () => {
    return (
        <div className='all-sides'>
        <div className='breaks'></div>
        {/* left sidebar*/}
        <div className='Sidebar'>
            <div className='avatar'>
                <img className='avatar-image' src={dumm} alt="avatar"/>
                <span className='usernames'><center>Username</center></span>
            </div>
            <div className='menus'>
            <select className='courses'>
            <option value="R">Recommended couser</option>
            <option value="e">Recommended couser</option>
            <option value="c">Recommended couser</option>
            <option selected value="Recommended Courses">Your learning</option>
        </select>
        </div>
        <div className='menus'>
        <select className='courses'>
            <option value="R">Recommended couser</option>
            <option value="e">Recommended couser</option>
            <option value="c">Recommended couser</option>
            <option selected value="Recommended Courses">Enroll Courses</option>
        </select>
            </div>
            <div className='donate-button'>
            <Button className="butt" variant="secondary" size="lg"><h2>Donate Us</h2></Button>{' '}
            </div>
            <br/>
            <div className='icons'>
                <center>
            <BsWhatsapp size="3em"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                <BsLinkedin size="3em"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <BsInstagram size="3em"/>
                </center>
            </div>
        </div>

        {/* Right side bar */}
        <div className='Sidebar1'>
        <select className='courses'>
            <option value="R">Recommended couser</option>
            <option value="e">Recommended couser</option>
            <option value="c">Recommended couser</option>
            <option selected value="Recommended Courses">Recommended courses</option>
        </select>
        </div>
        </div>
    )
}

export default SideBars

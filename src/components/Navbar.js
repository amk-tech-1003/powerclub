import React from 'react'
import './Navbar.css'
import logos from './logos.png'
const Navbar = () => {
    return (
        <nav className='main-nav'>
            <div className='logo'>
                <img src={logos} alt="logos"/>
            </div>
            <div className='menu-link'>
                <ul>
                    <li>
                        <a href='#'>Home</a>
                    </li>
                    <li>
                        <a href='#'>Community</a>
                    </li>
                    <li>
                        <a href='#'>Peer Batches</a>
                    </li>
                    <li>
                        <a href='#'>Events</a>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar

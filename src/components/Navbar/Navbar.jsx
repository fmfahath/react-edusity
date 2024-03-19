import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {

    const [darkNav, setDarkNav] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setDarkNav(true) : setDarkNav(false)
        })
    }, [])

    return (
        <nav className={`container ${darkNav ? 'dark-nav' : ''}`}>
            <img src={logo} alt='' className='logo' />
            <ul>
                <li>Home</li>
                <li>Program</li>
                <li>About Us</li>
                <li>Campus</li>
                <li>Testimonials</li>
                <li><button className='btn'>Contact Us</button></li>
            </ul>
        </nav>
    )
}

export default Navbar 
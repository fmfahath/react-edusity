import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll';

const Navbar = () => {

    const [darkNav, setDarkNav] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setDarkNav(true) : setDarkNav(false)
        })
    }, [])

    // show / hide mobile menu
    const [mobileView, setMobileView] = useState(false)
    const toggleMenu = () => {
        setMobileView(!mobileView)

    }

    return (
        <nav className={`container ${darkNav ? 'dark-nav' : ''} `}>
            <Link to='hero' smooth={true} offset={0} duration={500} ><img src={logo} alt='' className='logo' /></Link>
            <ul className={mobileView ? '' : 'hideMenu'}>
                <li><Link to='hero' smooth={true} offset={0} duration={500} onClick={() => setMobileView(false)}>Home</Link></li>
                <li><Link to='program' smooth={true} offset={-260} duration={500} onClick={() => setMobileView(false)}>Program</Link></li>
                <li><Link to='about' smooth={true} offset={-150} duration={500} onClick={() => setMobileView(false)}>About Us</Link></li>
                <li><Link to='campus' smooth={true} offset={-260} duration={500} onClick={() => setMobileView(false)}>Campus</Link></li>
                <li><Link to='testimonials' smooth={true} offset={-260} duration={500} onClick={() => setMobileView(false)}>Testimonials</Link></li>
                <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn' onClick={() => setMobileView(false)}>Contact Us</Link></li>
            </ul>
            <img src={menu_icon} className='menu-icon' onClick={toggleMenu} />
        </nav >
    )
}

export default Navbar 
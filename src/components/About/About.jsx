import React from 'react'
import './About.css'
import about_icon from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'


const About = () => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_icon} className='about-img' />
                <img src={play_icon} className='play-icon' />
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing Tommorow's Leaders Today</h2>
                <p>To be a globally renowned institution of higher learning, fostering academic excellence, innovation, and societal
                    impact. We envision a vibrant community of scholars, students, and staff
                    dedicated to advancing knowledge, promoting diversity, and addressing the
                    most pressing challenges of our time.
                </p>
                <p>
                    Through interdisciplinary collaboration, cutting-edge research, and a commitment to lifelong learning, we strive to
                    empower individuals to lead and serve with integrity, contributing to the betterment of local and global communities.
                </p>
                <p>
                    This vision statement highlights key elements such as academic excellence, innovation, societal impact, diversity,
                    interdisciplinary collaboration, research, and community engagement. It sets a direction for the university to
                    continually strive towards excellence while remaining responsive to the evolving needs of society
                </p>

            </div>
        </div>
    )
}

export default About
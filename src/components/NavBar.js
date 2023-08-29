import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/NavBar.css'
import logo from '../assets/TattersallRecruiting-logo-500.png'

function NavBar() {
  return (
    <div className='nav-bar'>
        <div className='logo'>
            <a>
              <img src={logo}/>
            </a>
        </div>
        <div className='nav-items'>
            <Link id='home' className='Nav-link' to="/">HOME</Link>
            <Link id='about-us' className='Nav-link' to='/about-us'>ABOUT US</Link>
            <Link id='get-hired' className='Nav-link' to='/get-hired'>GET HIRED</Link>
            <Link id='find-employees' className='Nav-link' to='/find-employees'>FIND EMPLOYEES</Link>
            <Link id='testimonials' className='Nav-link' to='/testimonials'>TESTIMONIALS</Link>
            <Link id='job-opinings' className='Nav-link' to='/job-opinings'>JOB OPENINGS</Link>
            <Link id='contact-us' className='Nav-link' to='/contact-us'>CONTACT US</Link>
        </div>
    </div>
  )
}

export default NavBar
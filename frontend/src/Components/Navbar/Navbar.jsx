import React from 'react'
import './Navbar.css'
import logo_light from '../../assets/logo-black.png';
import search_icon_light from '../../assets/search-w.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUser,faBookmark } from '@fortawesome/free-solid-svg-icons'



const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo_light} alt='' className='logo'/>
      <ul className='navbar-menu'>
        <li>Home</li>
        <li>Project</li>
        <li>Top Courses</li>
        <li>Recommendation</li>
        
      </ul>
      <div className='navbar-right'>

        <div className='search-box'>
            <input type='text' placeholder='search'/>
            <img src={search_icon_light} alt=''/>
        </div>

        
        <button>Sign in </button>
        
        <div className="icon">
            <FontAwesomeIcon icon={faBookmark} />
            <FontAwesomeIcon icon={faUser} />
        </div>
        
      </div>


        
    </div>
  )
}

export default Navbar
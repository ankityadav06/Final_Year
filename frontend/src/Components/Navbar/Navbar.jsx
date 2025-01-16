import React from 'react'
import './Navbar.css'
import logo_light from '../../assets/logo-black.png';
import search_icon_light from '../../assets/search-w.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUser,faShoppingCart } from '@fortawesome/free-solid-svg-icons'



const Navbar = () => {
  return (
    <div className='navbar'>
      <a href='/'><img src={logo_light} alt='' className='logo'/></a>

      <ul className='navbar-menu'>
        <a href='/' ><li>Home</li></a>
        <li>Project</li>
        <li>Top Courses</li>
        <a href='/recommendation'><li>Recommendation</li></a>
      </ul>
      <div className='navbar-right'>
        <a href='/sign' className='sign'><button>Register</button></a>
        
        <div className="icon">
            <FontAwesomeIcon icon={faShoppingCart} />
            <FontAwesomeIcon icon={faUser} />
        </div>
        
      </div>


        
    </div>
  )
}

export default Navbar
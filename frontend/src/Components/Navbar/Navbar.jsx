import React from 'react';
import './Navbar.css';
import logo_light from '../../assets/logo-black.png';
import search_icon_dark from '../../assets/search-b.png';


const Navbar = () => {


  return (
    <div className='navbar'>
            
        <img src={logo_light} alt='' className='logo'/> { /* add our logo */ }

        <ul>

            <li>Home </li>
            <li>About</li>
            <li>Course</li>
            

        </ul>

        <div className='search-box'>
            <input type='text' placeholder='search'/>
            <img  src={search_icon_dark} alt=''/>
        </div>

       
       
    </div>
  )
}

export default Navbar
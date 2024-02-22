import React from 'react';
import './navbar.css'
import menu from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search from '../../assets/search.png'
import upload from '../../assets/upload.png'
import more from '../../assets/more.png'
import notification from '../../assets/notification.png'
import profile from '../../assets/profile.png'
import { Link } from 'react-router-dom'
const Navbar = ({setSidebar}) => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img className="menu-icon" onClick={()=>setSidebar(prev=>prev===false?true:false)} src={menu} alt=''/>
        <Link to='/'><img  className="logo" src={logo} alt=''/></Link>
      </div>

      <div className='nav-middle flex-div'>
      <div className='search-box flex-div'>
        <input type="text" placeholder="Search"/>
        <img src={search} alt=''/>
      </div>
      </div>

      <div className='nav-right flex-div'>
        <img src={upload} Alt=""/>
        <img src={more} Alt=""/>
        <img src={notification} Alt=""/>
        <img src={profile} Alt="" className='user-icon'/>
      </div>
    </nav>
  );
}

export default Navbar;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMoon, faTh, faMagnifyingGlass,faUser,faMessage,faBell
 } from '@fortawesome/free-solid-svg-icons';
 import "./navbar.css"
 import Unknown from "../img/unknown_user.png"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='left'>
        {/* <link to="/" style={{ textDecoration:"none"}}>
          <span>Habesh</span>
        </link>  */}
        <FontAwesomeIcon size='2x' icon={faHouse} />
        <FontAwesomeIcon size='2x' icon={faMoon} />
        <FontAwesomeIcon size='2x' icon={faTh} />
        <div className='Search'>
          
          <input className='input-take' type="text" placeholder="search..." />
          <FontAwesomeIcon className='serach-icon' icon={faMagnifyingGlass} />
        </div>
      </div>
      <div className='right'></div>
        <FontAwesomeIcon size='2x' icon={faUser} />
        <FontAwesomeIcon size='2x' icon={faMessage} />
        <FontAwesomeIcon size='2x' icon={faBell} />
        <div className='User'>
            <img src={Unknown}  alt='img'/>
            <span>Dawit Kindea</span>
        </div>
    </div>
  );
}

export default Navbar;

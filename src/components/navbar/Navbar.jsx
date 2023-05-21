import React, { useState } from 'react';
import './navbar.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';

function Navbar() {
  const [activeNav, setActiveNav] = useState('#');

  const handleClick = (e, id) => {
    e.preventDefault();
    setActiveNav(id);
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <a href="#home" onClick={(e) => handleClick(e, 'home')} className={activeNav === 'home' ? 'active' : ''}>
        <AiOutlineHome />
      </a>
      <a href="#portfolio" onClick={(e) => handleClick(e, 'portfolio')} className={activeNav === 'portfolio' ? 'active' : ''}>
        <AiOutlineUser />
      </a>
      <a href="#experience" onClick={(e) => handleClick(e, 'experience')} className={activeNav === 'experience' ? 'active' : ''}>
        <BiBook />
      </a>
      <a href="#services" onClick={(e) => handleClick(e, 'services')} className={activeNav === 'services' ? 'active' : ''}>
        <RiServiceLine />
      </a>
      <a href="#contact" onClick={(e) => handleClick(e, 'contact')} className={activeNav === 'contact' ? 'active' : ''}>
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}

export default Navbar;

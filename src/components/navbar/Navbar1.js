import React, { useState } from 'react';
import Button from '../button/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from '../dropDown/Dropdown';
import { MenuItems } from '../menuItems/MenuItems';
import { MenuItems1 } from '../menuItems/MenuItems';
import { MenuItems2 } from '../menuItems/MenuItems';
import { MenuItems3 } from '../menuItems/MenuItems';
import { MenuItems4 } from '../menuItems/MenuItems';
import { MenuItems5 } from '../menuItems/MenuItems';
import '../../App.css';

export default function Navbar1() {
  const [click, setClick] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const [dropdown4, setDropdown4] = useState(false);
  const [dropdown5, setDropdown5] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(true);
  // Toggle the visibility of the dropdowns when hovering
  const toggleDropdown1 = () => setDropdown1(!dropdown1);
  const toggleDropdown2 = () => setDropdown2(!dropdown2);
  const toggleDropdown3 = () => setDropdown3(!dropdown3);
  const toggleDropdown4 = () => setDropdown4(!dropdown4);
  const toggleDropdown5 = () => setDropdown5(!dropdown5);

  return (
    <div>
      <nav className="my-custom-nav">
        <Link to='/' className='my-custom-logo' onClick={closeMobileMenu}>
          <img src="/assets/logo.png" alt="My Logo" />
        </Link>
        <div className='my-custom-menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'my-custom-menu active' : 'my-custom-menu'}>
          <li className='my-custom-item'>
            <Link to='/' className='my-custom-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='my-custom-item'>
            <Link
              to='/Courses'
              className='my-custom-links'
              onClick={closeMobileMenu}
            >
              Courses <i className='fas fa-caret-down' />
            </Link>
            {dropdown1 && <Dropdown MenuItems={MenuItems} />}
          </li>
          <li className='my-custom-item'>
            <Link
              to='/products'
              className='my-custom-links'
              onClick={closeMobileMenu}
            >
              E-Learning <i className='fas fa-caret-down' />
            </Link>
            {dropdown2 && <Dropdown MenuItems={MenuItems1} />}
          </li>
          <li className='my-custom-item'>
            <Link
              to='/contact-us'
              className='my-custom-links'
              onClick={closeMobileMenu}
            >
              Donation <i className='fas fa-caret-down' />
            </Link>
            {dropdown3 && <Dropdown MenuItems={MenuItems3} />}
          </li>
          <li className='my-custom-item'>
            <Link
              to='/contact-us'
              className='my-custom-links'
              onClick={closeMobileMenu}
            >
              History <i className='fas fa-caret-down' />
            </Link>
          </li>
          <li className='my-custom-item'>
            <Link
              to='/contact-us'
              className='my-custom-links'
              onClick={closeMobileMenu}
            >
              About Us <i className='fas fa-caret-down' />
            </Link>
          </li>
          <li className='my-custom-item'>
            <Link
              to='/contact-us'
              className='my-custom-links'
              onClick={closeMobileMenu}
            >
              Eng <i className='fas fa-caret-down' />
            </Link>
            {dropdown5 && <Dropdown MenuItems={MenuItems5} />}
          </li>
        </ul>
        <Button />
      </nav>
    </div>
  );
}

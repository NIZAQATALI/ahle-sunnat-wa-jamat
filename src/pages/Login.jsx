
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
 import {MdArrowDropDown}  from'react-icons/md'
 import  { CiGlobe } from "react-icons/ci"
import { Link } from 'react-router-dom';
import './Navbar.css';
export default function Login() {
    const [open, setOpen] = useState(false);
	const handleClick = () => {
		setOpen(!open);
	};

	const closeMenu = () => {
		setOpen(false);
	};
 
  return (
    <div>
 <nav className="navbar">
			<Link to="/" className="nav-logo">
				Logo
			</Link>
			<div onClick={handleClick} className="nav-icon">
				{open ? <FiX /> : <FiMenu />}
			</div>
			<ul className={open ? 'nav-links active' : 'nav-links'}>
				<li className="nav-item">
					<Link to="/" className="nav-link" onClick={closeMenu}>
						Home
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/about" className="nav-link" onClick={closeMenu}>
						Courses<MdArrowDropDown/>
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/shop" className="nav-link" onClick={closeMenu}>
						E-Learning <MdArrowDropDown/>
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/contact" className="nav-link" onClick={closeMenu}>
						Donation<MdArrowDropDown/>
					</Link>
				</li>
                <li className="nav-item">
					<Link to="/contact" className="nav-link" onClick={closeMenu}>
						History<MdArrowDropDown/>
					</Link>
				</li>
                <li className="nav-item">
					<Link to="/contact" className="nav-link" onClick={closeMenu}>
						About Us<MdArrowDropDown/>
					</Link>
				</li>
                <li className="nav-item">
					<Link to="/contact" className="nav-link" onClick={closeMenu}>
						Eng
<CiGlobe className='icons'/>
					</Link>
					
				</li>
			</ul>
		</nav>
       </div>
  )
}

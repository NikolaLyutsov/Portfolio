import React, { useState } from 'react';
import './Navbar.css';
import { ArrowRightIcon } from "@heroicons/react/solid";

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <>
            <nav className='navbar'>
                <a to='#about' className='navbar-logo'>
                    Nikola Lyutsov
                </a>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <a href='#projects' className='nav-links' >
                            Past Work
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href="#skills" className='nav-links'>
                            Skills
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href="#education" className='nav-links'>
                            Education
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href="#contact" className='nav-links'>
                            Contact
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href="#hireMe" className='nav-links'>
                            Hire Me
                            <ArrowRightIcon className="ArrowRightIcon" />
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;
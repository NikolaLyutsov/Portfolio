import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import './Navbar.css';

const myFunction = () => {
  var x = document.getElementById("myNavigation");
  if (x.className === "navigation") {
    x.className += " responsive";
  } else {
    x.className = "navigation";
  }
}

export default function Navbar() {
  
  return (
    <header>
      <div>
        <nav className="navigation" id="myNavigation">
          <a href="#about">
            Nikola Lyutsov
          </a>
          <a href="#projects">
            Past Work
          </a>
          <a href="#skills">
            Skills
          </a>
          <a href="#education">
            Education
          </a>
          <a href="#hireMe" className='hireMe'>
            Hire Me 
             <ArrowRightIcon className="ArrowRightIcon" />
          </a>
          <a href="javascript:void(0);" class="icon" onclick={myFunction}>
            <i class="fa fa-bars"></i>
          </a>
        </nav>
      </div>
    </header>
  );
}
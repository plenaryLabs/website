import React from "react"
import { Link } from "gatsby"

import plenaryLogo from '../svg/plenary.svg';

const Header = () => {

  window.onscroll = function () 
  {
    const header = document.getElementById('header');
    let currentScrollPos = window.pageYOffset;
    
    if(currentScrollPos > 150)
    {
      header.style.backgroundColor = "#000";
      header.classList.add('dark');
    }

    if(currentScrollPos <= 150)
    {
      header.style.backgroundColor = "transparent";
      header.classList.remove('dark');
    }
  }

  return (
    <header id="header">
      <div className="wrapper">
        <div className="logo"> 
          <Link>
            <img src={plenaryLogo} />
            <span>Plenary</span>
          </Link>
        </div>
        <div className="navigation">
          <nav>
            <Link>
              Menu
            </Link>
          </nav>
        </div>  
      </div>
    </header>
  )
}

export default Header



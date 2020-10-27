import React from "react";
import { Link } from 'gatsby';

import plenaryLogo from '../svg/plenary.svg';

const Menu = () => {
  return (
    <div className="menu">
      <header id="header">
        <div className="container">
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
                  Voltar
                </Link>
              </nav>
            </div>  
          </div>
        </div>
      </header>
      <div className="content">
        <div className="caps">Menu</div>
        <Link to="/">Início</Link>
        <Link to="/">Serviços</Link>
        <Link to="/">Projetos</Link>
        <Link to="/">Sobre a empresa</Link>
        <Link to="/">Entre em contato</Link>
      </div>
    </div>
  )
}

export default Menu;

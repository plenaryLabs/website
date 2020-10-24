import React from "react";
import { Link } from "gatsby";

import maceioSVG from '../svg/maceio.svg';
import plenarySVG from'../svg/plenary-mini.svg';

const Footer = () => {
  return (
    <div className="container footer">
      <div className="footer-top">
        <div>
          <p>
            Envie um e-mail
          </p>
          <Link to="/">
            contato@plenary.com.br
          </Link>
        </div>
        <div>
          <p>
            Ou se preferir ligar
          </p>
          <Link to="/">
            +55 (82) 92000-0260
          </Link>
        </div>
        <div>
          <p>
            Disclaimer
          </p>
          <Link to="/">
            Política de privacidade
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © Plenary 2020, Todos os direitos reservados.
        </p>
        <p className="madewithlove">
          Feito com amor em <img src={maceioSVG} /> 
          por <img src={plenarySVG} />!
        </p>
      </div>
    </div>
  )
}

export default Footer;
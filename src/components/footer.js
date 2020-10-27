import React from "react";
import { Link } from "gatsby";

import maceioSVG from '../svg/maceio.svg';
import plenarySVG from'../svg/plenary-mini.svg';

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-row">
          <div className="col">
            <p>
              Envie um e-mail
            </p>
            <Link className="a-light" to="/">
              contato@plenary.com.br
            </Link>
          </div>
          <div className="col">
            <p>
              Ou se preferir ligar
            </p>
            <Link className="a-light" to="/">
              +55 (82) 92000-0260
            </Link>
          </div>
          <div className="col">
            <p>
              Disclaimer
            </p>
            <Link className="a-light" to="/">
              Política de privacidade
            </Link>
          </div>
        </div>
        <div className="footer-row">
          <p className="col">
            © Plenary 2020, Todos os direitos reservados.
          </p>
          <p className="col madewithlove">
            Feito com amor em <img className="map" src={maceioSVG} /> 
            por <img className="plenary-mini" src={plenarySVG} />!
          </p>
        </div>
    </div>
  )
}

export default Footer;
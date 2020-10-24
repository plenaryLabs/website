import React from "react";
import { Link } from "gatsby";

const Services = () => {
  return (
    <div className="container services">
      <div className="caps">Serviços</div>
      <div className="title">O que oferecemos para seu negócio</div>
      <div className="buttons">
        <Link to="/" id="development">
          Design de interfaces
        </Link>
        <Link to="/">Desenvolvimento</Link>
        <Link to="/">DevOps</Link>
      </div>
    </div>
  )
}

export default Services;
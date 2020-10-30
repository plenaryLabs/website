import React from "react";
import { Link } from "gatsby";

const Contact = () => {
  return (
    <div className="contact">
      <div class="container">
        <div className="caps">Contato</div>
        <div className="title">Quer falar com a gente?</div>
        <p>
          Possui um projeto?
        </p>
        <Link className="a-dark" to="/contato">Entre em contato conosco!</Link>
      </div>
    </div>
  )
}

export default Contact;
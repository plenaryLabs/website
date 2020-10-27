import React from "react";
import Button from "../components/button";

const Contact = () => {
  return (
    <div className="container">
      <div className="contact-box">
        <div class="content">
          <div className="caps">Contato</div>
          <div className="title">Tem um projeto em mente?</div>
          <div className="box">
            <form>
              <div className="top">
                <input placeholder="Qual é o seu nome?" />
                <input placeholder="Defina seu melhor email!" />
              </div>
              <div className="bottom" align="center">
                <textarea placeholder="O que gostária de falar?">
                </textarea>
              </div>
              <div className="button-contact">
                <Button type="button-outline" text="Entrar em contato" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
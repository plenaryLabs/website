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
                <div className="box-container">
                  <p>Seu nome</p>
                  <input placeholder="Qual é o seu nome?" />
                </div>
                <div className="box-container">
                  <p>Seu e-mail</p>
                  <input placeholder="Defina seu melhor email!" />
                </div>
              </div>
              <div className="bottom">
                <p>Mensagem</p>
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
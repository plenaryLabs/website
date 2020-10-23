import React from 'react'
import { Link } from 'gatsby'
import Header from '../components/header'
import Button from '../components/button'

import '../styles/styles.scss'
import 'normalize.css'
import video from '../videoplayback.mp4';

var clientX = -100;
var clientY = -100;

let buttonServices = document.getElementById("development");

function initCursor() {
  document.addEventListener("mousemove", function (e) {
    clientX = e.clientX;
    clientY = e.clientY;
  });

  var render = function render() {
    document.getElementById("cursor").style.transform = 'translate(' + clientX + 'px, ' + clientY + 'px)';
    requestAnimationFrame(render);
  };
  requestAnimationFrame(render);
};

function initServices() {
    buttonServices.addEventListener('mouseover', function (e){
        document.getElementsByClassName('services').className = 'development';
    })

    buttonServices.addEventListener('mouseout', function (e){
        document.getElementsByClassName('services').className = 'container services';
    })
}

const IndexPage = () => {
  return (
    <div>
        <div id="cursor">
            {initCursor()}
            {initServices()}
        </div>

        <Header />
        <div className="container hero-section">
            <div className="wrapper">
                <div className="content">
                    <div className="texts">
                    <div className="caps">
                        Início
                    </div>
                    <div className="title">
                        Somos mais que uma agência digital.
                    </div>
                    <div className="subtitle">
                        Faucibus eu mi, lectus placerat.
                        Tincidunt vitae erat facilisis amet cras.
                    </div>
                </div>
                    <div className="buttons">
                        <Button type="button" text="Veja mais"/>
                        <Button type="button-outline" text="Entre em contato"/>
                    </div>
                </div>
            </div>
            <video autoPlay loop muted autoPlay>
                <source src={video} type="video/mp4"/>
            </video>
        </div>
        <div className="container services">
            <div className="caps">
                Serviços
            </div>
            <div className="title">
                O que oferecemos para seu negócio
            </div>
            <div className="buttons">
                <Link to="/" id="development">
                  Design de interfaces
                </Link>
                <Link to="/">
                  Desenvolvimento
                </Link>
                <Link to="/">
                  DevOps
                </Link>
            </div>
        </div>
    </div>
  )
}

export default IndexPage

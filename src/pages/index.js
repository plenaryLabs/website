import React from "react";

import Cursor from "../components/cursor";
import Header from "../components/header";
import Menu from "../components/menu";
import Hero from "../components/hero";
import Services from "../components/services";
import Clients from "../components/clients";
import Contact from "../components/contact";
import Footer from "../components/footer";

import "../styles/styles.scss";
import "normalize.css";

const IndexPage = () => {
  return (
    <div>
      <div id="content">
        <Cursor />
        <Header />
        <Hero />
        <Services />
        <Clients />
        <Contact />
        <Footer />
      </div>
      <div id="menu">
        <Menu />
      </div>
    </div>
  );
};

export default IndexPage;
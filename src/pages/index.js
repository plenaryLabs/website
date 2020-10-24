import React from "react";

import Cursor from "../components/cursor";
import Hero from "../components/hero";
import Header from "../components/header";
import Services from "../components/services";
import Clients from "../components/clients";
import Contact from "../components/contact";
import Footer from "../components/footer";

import "../styles/styles.scss";
import "normalize.css";

const IndexPage = () => {
  return (
    <div>
      <Cursor />
      <Header />
      <Hero />
      <Services />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
};

export default IndexPage;

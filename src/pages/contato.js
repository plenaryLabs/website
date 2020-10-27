import React from "react";

import Cursor from "../components/cursor";
import Header from "../components/header";
import Contact from "../components/contant-box";
import Footer from "../components/footer";

import "../styles/styles.scss";
import "normalize.css";

const IndexPage = () => {
  return (
    <div>
      <div id="content">
        <Cursor />
        <Header />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default IndexPage;

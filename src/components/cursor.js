import React from "react";

let clientX = -100;
let clientY = -100;

const Cursor = () => {
  function showCursor() {
    document.addEventListener("mousemove", function(e) {
      clientX = e.clientX;
      clientY = e.clientY;
    });

    var render = function render() {
      document.getElementById("cursor").style.transform =
        "translate(" + clientX + "px, " + clientY + "px)";
      requestAnimationFrame(render);
    };
    requestAnimationFrame(render);
  };

  window.onload = showCursor();

  return (
    <div id="cursor" className="cursor"></div>
  )
}

export default Cursor;
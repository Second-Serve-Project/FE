import React from "react";
import Main from "./Main";
import FooterRender from "../Footer/FooterRender";
import "./Main.css";

function MainRender() {
  return (
    <div id="main">
      <Main />
      <FooterRender />
    </div>
  );
}

export default MainRender;
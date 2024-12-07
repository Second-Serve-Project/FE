import React from "react";
import BackRender from "../Back/BackRender";
import ChangePW from "./ChangePW";
import FooterRender from "../Footer/FooterRender";
import "./ChangePW.css";

function ChangePWRender() {
  return (
    <div id="changePW">
      <BackRender />
      <ChangePW />
      <FooterRender />
    </div>
  );
}

export default ChangePWRender;
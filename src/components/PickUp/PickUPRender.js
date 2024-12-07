import React from "react";
import BackRender from "../Back/BackRender";
import Pickup from "./PickUp";
import FooterRender from "../Footer/FooterRender";
import "./PickUp.css";

function PickUpRender() {
  return (
    <div id="main">
      <BackRender />
      <Pickup />
      <FooterRender />
    </div>
  );
}

export default PickUpRender;
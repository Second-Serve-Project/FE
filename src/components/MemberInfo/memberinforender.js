import React from "react";
import BackRender from "../Back/BackRender";
import MemberInfo from "./memberinfo";
import FooterRender from "../Footer/FooterRender";
import "./memberinfo.css";

function MemberInfoRender() {
  return (
    <div id="memberinfo">
      <BackRender />
      <MemberInfo />
      <FooterRender />
    </div>
  );
}

export default MemberInfoRender;
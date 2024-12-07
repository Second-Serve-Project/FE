import React from "react";

// 컴포넌트 Import
import Logo from "../Logo/Logo";
// import SignupForm from "./SignupForm";
import SignupFormRender from "./SignupFormRender";
import FooterButtons from "../Footer/FooterButtons";
import BackRender from "../Back/BackRender";

import "./signup.css";
import "../Footer/footer.css";

function JoinRender() {
  return (
    <div id="main">
      <BackRender />
      <Logo />
      {/* <SignupForm /> */}
      <SignupFormRender />
      <FooterButtons />
    </div>
  );
}

export default JoinRender;
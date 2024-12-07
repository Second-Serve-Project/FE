import React from "react";
import BackRender from "../Back/BackRender";
import Logo from "../Logo/Logo";
import LoginForm from "./LoginForm";
import FooterRender from "../Footer/FooterRender";
import "./login.css";

function LoginRender() {
  return (
    <div id="main">
      <BackRender />
      <Logo />
      <LoginForm />
      <FooterRender />
    </div>
  );
}

export default LoginRender;
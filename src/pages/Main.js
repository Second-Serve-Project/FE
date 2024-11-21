import React from "react";
import '../css/Main.css';
import logo from '../images/logo.svg';
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <body>
      <div class="logo">
        <Link to='/'>
          <img src={logo}></img>
        </Link>
      </div>
    </body>
  )
};

export default Main;
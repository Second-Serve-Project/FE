import React from "react";
import { Link } from "react-router-dom";
import back from '../../images/back.svg';

function BackButton() {
  return (
    <div className="headerButton">
      <Link>
        <button>
          <img src={back} className="back"></img>
        </button>
      </Link>
    </div>
  );
}

export default BackButton;
import React from "react"
import { Link } from "react-router-dom";
import list from '../../images/list.svg';
import map from '../../images/map.svg';
import home from '../../images/home.svg';
import bell from '../../images/bell.svg';
import mypage from '../../images/mypage.svg';

function FooterButtons() {
  return (
    <footer>
      <div className="footerButton">
        <div>
          <button>
            <img className="footerbtnimg" src={list} alt="List" />
          </button>
        </div>
        <div>
          <Link>
            <button>
              <img className="footerbtnimg" src={map} alt="Map" />
            </button>
          </Link>
        </div>
        <div>
          <Link to="/">
            <button>
              <img className="footerbtnimg" src={home} alt="Home" />
            </button>
          </Link>
        </div>
        <div>
          <Link to="/pickup">
            <button>
              <img className="footerbtnimg" src={bell} alt="Bell" />
            </button>
          </Link>
        </div>
        <div>
          <Link to="/mypage">
            <button>
              <img className="footerbtnimg" src={mypage} alt="My Page" />
            </button>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default FooterButtons;
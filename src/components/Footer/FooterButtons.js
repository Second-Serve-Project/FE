import React, { useState } from "react"
import { Link } from "react-router-dom";
import list from '../../images/list.svg';
import map from '../../images/map.svg';
import home from '../../images/home.svg';
import bell from '../../images/bell.svg';
import mypage from '../../images/mypage.svg';
import x from '../../images/x.svg';

function FooterButtons() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <footer>
        <div className="footerButton">
          <div onClick={toggleMenu}>
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

      {/* 메뉴와 어두운 배경 */}
      <div className={`listMenu ${isMenuOpen ? 'open' : ''}`}>
        <button className="x" onClick={toggleMenu}>
          <img src={x} alt="Close" />
        </button>
        <h2>Menu</h2>
        <ul>
          <li>밥</li>
          <li>치킨/피자</li>
          <li>일식</li>
          <li>면</li>
          <li>샐러드</li>
          <li>빵</li>
          <li>디저트</li>
        </ul>
      </div>
      {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  )
}

export default FooterButtons;
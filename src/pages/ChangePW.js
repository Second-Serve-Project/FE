import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../css/ChangePW.css';
import back from '../images/back.svg';
import list from '../images/list.svg';
import map from '../images/map.svg';
import home from '../images/home.svg';
import bell from '../images/bell.svg';
import mypage from '../images/mypage.svg';

function ChangePW() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // 가짜 현재 비밀번호 (데모용)
  const mockCurrentPassword = "password123";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentPassword !== mockCurrentPassword) {
      setError("! 현재 비밀번호가 올바르지 않습니다");
      setSuccess("");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("! 새 비밀번호가 일치하지 않습니다");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("비밀번호가 일치합니다");
  };

  return (
    <body className="pwBody">
      <header>
        <div className="headerButton">
          <Link>
            <button>
              <img src={back} className="back"></img>
            </button>
          </Link>
        </div>
      </header>

      <main>
        <div className="pwWrite">
          <a>비밀번호 변경</a>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="changeForm">
            {/* 현재 비밀번호 입력 */}
            <div>
              <input
                type="password"
                id="currentPassword"
                placeholder="현재 비밀번호"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)} />
            </div>

            {/* 새 비밀번호 입력 */}
            <div>
              <input
                type="password"
                id="newPassword"
                placeholder="새 비밀번호"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)} />
            </div>

            {/* 비밀번호 확인 입력 */}
            <div>
              <input
                type="password"
                id="confirmPassword"
                placeholder="비밀번호 확인"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
          </div>

          <div className="messageContainer">
            <div className="message">
              {/* 에러 메시지 */}
              {error && <p className="errorMessage">{error}</p>}
              {/* 성공 메시지 */}
              {success && <p className="successMessage">{success}</p>}
            </div>


            <div className="divChangeButton">
              <button type="submit" className="changeButton"> 변경 </button>
            </div>
          </div>

        </form>
      </main>

      <footer>
        <div className="footerButton">
          <div id="list">
            <button>
              <img className="footerbtnimg" src={list} alt="List" />
            </button>
          </div>

          <div id="map">
            <Link>
              <button>
                <img className="footerbtnimg" src={map} alt="Map" />
              </button>
            </Link>
          </div>

          <div id="home">
            <Link to="/">
              <button>
                <img className="footerbtnimg" src={home} alt="Home" />
              </button>
            </Link>
          </div>

          <div id="bell">
            <Link>
              <button>
                <img className="footerbtnimg" src={bell} alt="Bell" />
              </button>
            </Link>
          </div>

          <div id="mypage">
            <Link>
              <button>
                <img className="footerbtnimg" src={mypage} alt="My Page" />
              </button>
            </Link>
          </div>
        </div>
      </footer>
    </body>
  );
}

export default ChangePW;
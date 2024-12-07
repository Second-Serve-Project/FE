import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignupForm() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [warningMessage, setWarningMessage] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value !== password) {
      setWarningMessage("! 비밀번호가 일치하지 않습니다.");
    } else {
      setWarningMessage("");
    }
  };

  return (
    <form action="/submit" id="signup-form">
      <div id="email">
        <input type="email" placeholder="이메일" required />
      </div>
      <div id="id">
        <input type="text" placeholder="아이디" required />
      </div>
      <div id="pw">
        <input
          id="password"
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>
      <div id="pwcheck" style={{ position: "relative" }}>
        <input
          id="confirm-password"
          type="password"
          placeholder="비밀번호 확인"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          required
        />
        <div
          id="warning-message"
          style={{
            visibility: warningMessage ? "visible" : "hidden", // 공간은 차지하되 메시지는 숨김
            color: "#eb2424",
            fontSize: "14px",
            position: "absolute", // 레이아웃 흐름에서 분리
            top: "80%", // 입력 필드 바로 아래에 배치
          }}
        >
          {warningMessage}
        </div>
      </div>
      {/* <button id="admitbtn" type="submit">
        가입
      </button> */}
      <Link to="/login">
        <button id="admitbtn" type="submit">
          가입
        </button>
      </Link>
    </form>
  );
}

export default SignupForm;
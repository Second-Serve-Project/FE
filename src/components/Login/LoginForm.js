import React, { useState } from "react";

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
    <form action="/submit" id="login-form">
      <div id="id">
        <input type="text" placeholder="아이디" required />
      </div>
      <div id="pw">
        <input id="password" type="password" placeholder="비밀번호" required />
      </div>
      <button id="loginbtn" type="submit">
        로그인
      </button>
    </form>
  );
}

export default SignupForm;
import React, { useState } from "react";
import './ChangePW.css';

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

    </body>
  );
}

export default ChangePW;
import React from "react";

function MemberInfo() {
  return (
    <div className="member">
      <div className="member_info">
        <div className="member_name">
          <p>qwerty123님</p>
        </div>
        <div className="member_point">
          <p>5,100 포인트</p>
        </div>
      </div>
      <div className="btn">
        <div className="pw_change">
          <button className="pw_changebtn" type="submit">
            비밀번호 변경
          </button>
        </div>
        <div className="logout">
          <button className="logoutbtn" type="submit">
            로그아웃
          </button>
        </div>
      </div>
    </div>
  );
}

export default MemberInfo;
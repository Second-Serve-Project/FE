import React from "react";
import point from "../../images/point.svg";
import logout from "../../images/logout.svg";
import pwchange from "../../images/pwchange.svg";
import noti from "../../images/noti.svg";

//가게 이미지도 나중에 백에서 불러와야 함
import store from "../../images/store.png";

import star from "../../images/star.svg";

function MemberInfo() {
  return (
    <div className="member">
      <div className="member_info">
        <div className="member_name">
          <p>qwerty123님</p>
        </div>
        <div className="member_point">
          <p>
            <img id="point" src={point} alt="Point"></img> 5,100 포인트
          </p>
        </div>
      </div>
      <div className="btn">
        <div className="pw_change">
          <button className="pw_changebtn" type="submit">
            <img id="pwchange" src={pwchange} alt="Pwchange"></img> 비밀번호
            변경
          </button>
        </div>
        <div className="logout">
          <button className="logoutbtn" type="submit">
            <img id="logout" src={logout} alt="Logout"></img> 로그아웃
          </button>
        </div>
      </div>
      <div className="usedStore">
        <div className="useWrite">
          <p>이용했던 가게</p>
        </div>

        <button className="storeButton">
          <div className="oneStore">
            <img src={store} className="storeImg" />
            <div className="storeName">
              <a>가게 이름</a>
            </div>
            <div className="storeInfo">
              <img src={star} />
              <a>0.0</a>
              <a>·</a>
              <a>000m</a>
            </div>
          </div>
        </button>

        <button className="storeButton">
          <div className="oneStore">
            <img src={store} className="storeImg" />
            <div className="storeName">
              <a>가게 이름</a>
            </div>
            <div className="storeInfo">
              <img src={star} />
              <a>0.0</a>
              <a>·</a>
              <a>000m</a>
            </div>
          </div>
        </button>

        {/*
          가게들 추가로 불러오기
           */}
      </div>
    </div>
  );
}

export default MemberInfo;

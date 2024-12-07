import React, { useEffect } from "react";
import './PickUp.css';
import time from '../../images/time.svg';
import location from '../../images/location.svg';
import packageImg from '../../images/package.png';

const { kakao } = window;

function PickUp() {

  useEffect(() => {
    const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    const options = { //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(37.588869, 126.944041), //지도의 중심좌표.
      level: 4 //지도의 레벨(확대, 축소 정도)
    };
    const map = new kakao.maps.Map(container, options);

    let markerPosition = new kakao.maps.LatLng(37.589253, 126.945359);
    let marker = new kakao.maps.Marker({ position: markerPosition });

    marker.setMap(map);
  }, [])

  return (
    <body>
      <main>
        <div className="locationMap">
          <div id="map">
            {/*지도 위치*/}
          </div>
        </div>

        <div className="pickupContainer">
          <div className="pickupWrite">
            <a>늦지 않게 픽업해주세요!</a>
          </div>
          <div className="pickupTime">
            <img src={time} />
            <a>0 : 00 ~ 0 : 00</a>
          </div>
          <div className="pickupLocation">
            <img src={location} />
            <a>서울특별시 서대문구 00로 0길 0층</a>
          </div>
        </div>

        <div className="package">
          <img src={packageImg} />
          <div className="packageWrite">
            <a className="packageName">패키지 이름</a>
            <a>구성품1, 구성품2, ...</a>
            <div className="packagePrice">
              <a>0000원</a>
              <a className="originalPrice">0000원</a>
            </div>

          </div>
          <div className="packageLeft">
            <a>0개</a>
          </div>
        </div>
      </main>
    </body>
  )
};

export default PickUp;
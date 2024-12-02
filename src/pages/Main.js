import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import '../css/Main.css';
import logo from '../images/logo.svg';
import list from '../images/list.svg';
import map from '../images/map.svg';
import home from '../images/home.svg';
import bell from '../images/bell.svg';
import mypage from '../images/mypage.svg';
import search from '../images/search.svg';
import rice from '../images/rice.svg';
import chicken from '../images/chicken.svg';
import sushi from '../images/sushi.svg';
import noodle from '../images/noodle.svg';
import salad from '../images/salad.svg';
import bread from '../images/bread.svg';
import cake from '../images/cake.svg';

//배너 이미지는 나중에 백에서 불러와야 함
import banner1 from '../images/banner1.png';
import banner2 from '../images/banner2.png';
import banner3 from '../images/banner3.png';

import left from '../images/left.svg';
import right from '../images/right.svg';
import noti from '../images/noti.svg';

//가게 이미지도 나중에 백에서 불러와야 함
import store from '../images/store.png';

import star from '../images/star.svg';


function Main() {
  const carouselRef = useRef(null);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const carousel = carouselRef.current;
    const prevButton = prevButtonRef.current;
    const nextButton = nextButtonRef.current;

    const CAROUSEL_LENGTH = carousel?.children.length - 1;

    const nextEvent = () => {
      if (current !== CAROUSEL_LENGTH) {
        setCurrent((prev) => prev + 1);
        carousel.style.transform = `translateX(${(current + 1) * -390}px)`;
      } else {
        setCurrent(0);
        carousel.style.transform = `translateX(0px)`;
      }
    };

    const prevEvent = () => {
      if (current !== 0) {
        setCurrent((prev) => prev - 1);
        carousel.style.transform = `translateX(${(current - 1) * -390}px)`;
      } else {
        setCurrent(CAROUSEL_LENGTH);
        carousel.style.transform = `translateX(${CAROUSEL_LENGTH * -390}px)`;
      }
    };

    nextButton.addEventListener("click", nextEvent);
    prevButton.addEventListener("click", prevEvent);

    return () => {
      nextButton.removeEventListener("click", nextEvent);
      prevButton.removeEventListener("click", prevEvent);
    };
  }, [current]);

  return (
    <body>
      <header className="mainHeader">
        <div class="logo">
          <Link to='/'>
            <img src={logo} />
          </Link>
        </div>

        <div className="search">
          <input type="text" />
          <button className="searchButton">
            <img src={search} />
          </button>
        </div>
      </header>

      <main className="main">
        <div className="select" >
          <div className="foodMenu">
            <div className="rice">
              <button>
                <img src={rice} />
                <a>밥</a>
              </button>
            </div>
            <div className="chicken">
              <button>
                <img src={chicken} />
                <a>치/피</a>
              </button>
            </div>
            <div className="sushi">
              <button>
                <img src={sushi} />
                <a>일식</a>
              </button>
            </div>
            <div className="noodle">
              <button>
                <img src={noodle} />
                <a>면</a>
              </button>
            </div>
            <div className="salad">
              <button>
                <img src={salad} />
                <a>샐러드</a>
              </button>
            </div>
            <div className="bread">
              <button>
                <img src={bread} />
                <a>빵</a>
              </button>
            </div>
            <div className="cake">
              <button>
                <img src={cake} />
                <a>디저트</a>
              </button>
            </div>
          </div>
        </div>

        <div className="banner">
          <div className="bannerImg">
            <div className="carousel" ref={carouselRef}>
              <button>
                <div className="cell"><img src={banner1} alt="banner1" /></div>
              </button>
              <button>
                <div className="cell"><img src={banner2} alt="banner2" /></div>
              </button>
              <button>
                <div className="cell"><img src={banner3} alt="banner3" /></div>
              </button>
            </div>
          </div>

          <div className="lrButton">
            <button className="prevButton" ref={prevButtonRef}>
              <img src={left} alt="Previous" />
            </button>
            <button className="nextButton" ref={nextButtonRef}>
              <img src={right} alt="Next" />
            </button>
          </div>
        </div>

        <div className="saleStores">
          <div className="saleWrite">
            <img src={noti} />
            <a>마감 세일 중!</a>
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
      </main>

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

export default Main;
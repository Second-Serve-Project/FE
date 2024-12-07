import React from "react";
import star from "../../images/star.svg";

function Store() {
  return (
    <div className="store_container">
      <div className="store">
        <img
          className="store_img"
          src="https://placehold.co/349x109"
          alt="Store 1"
        />
        <div className="info_container">
          <div className="store_name">가게 이름 1</div>
          <div className="store_star">
            <img className="star_img" src={star} alt="Star 1" />
            <div className="info">5.0 · 350m</div>
          </div>
        </div>
      </div>
      <div className="store">
        <img
          className="store_img"
          src="https://placehold.co/349x109"
          alt="Store 2"
        />
        <div className="info_container">
          <div className="store_name">가게 이름 2</div>
          <div className="store_star">
            <img className="star_img" src={star} alt="Star 2" />
            <div className="info">5.0 · 350m</div>
          </div>
        </div>
      </div>
      <div className="store">
        <img
          className="store_img"
          src="https://placehold.co/349x109"
          alt="Store 3"
        />
        <div className="info_container">
          <div className="store_name">가게 이름 3</div>
          <div className="store_star">
            <img className="star_img" src={star} alt="Star 3" />
            <div className="info">5.0 · 350m</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Store;
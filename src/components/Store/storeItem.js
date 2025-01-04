import React from "react";
import star from "../../images/star.svg";

function StoreItem({ name, rating, distance, imageUrl }) {
  return (
    <div className="store">
      <img className="store_img" src={imageUrl} alt={name} />
      <div className="info_container">
        <div className="store_name">{name}</div>
        <div className="store_star">
          <img className="star_img" src={star} alt={`${name} star`} />
          <div className="info">
            {rating} · {distance}m
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoreItem;

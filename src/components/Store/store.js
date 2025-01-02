import React from "react";
import StoreItem from "./storeItem";

function Store() {
  const storeData = [
    { name: "가게 이름 1", rating: "5.0", distance: 350, imageUrl: "https://placehold.co/349x109" },
    { name: "가게 이름 2", rating: "4.8", distance: 500, imageUrl: "https://placehold.co/349x109" },
    { name: "가게 이름 3", rating: "4.5", distance: 200, imageUrl: "https://placehold.co/349x109" },
    // 원하는 만큼 데이터 추가
  ];

  return (
    <div className="store_container">
      {storeData.map((store, index) => (
        <StoreItem
          key={index}
          name={store.name}
          rating={store.rating}
          distance={store.distance}
          imageUrl={store.imageUrl}
        />
      ))}
    </div>
  );
}

export default Store;

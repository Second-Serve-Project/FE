const storeData = {
    imgUrl: "https://placehold.co/349x109",
    name: "가게 이름",
    rating: "5.0",
    distance: "350m",
    hours: "0 : 00 ~ 0 : 00",
    location: "서울특별시 종로구 00로 0길 0층"
  };
  
  const menuData = [
    {
      id: 1,
      imgUrl: "https://placehold.co/100x100",
      name: "페키지 1",
      items: ["구성품 1", "구성품 2", "구성품 3"],
      salePrice: "9900원",
      originalPrice: "12000원",
      remaining: 10
    },
    {
      id: 2,
      imgUrl: "https://placehold.co/100x100",
      name: "페키지 2",
      items: ["구성품 A", "구성품 B", "구성품 C"],
      salePrice: "10900원",
      originalPrice: "15000원",
      remaining: 5
    },
    {
      id: 3,
      imgUrl: "https://placehold.co/100x100",
      name: "페키지 3",
      items: ["구성품 X", "구성품 Y", "구성품 Z"],
      salePrice: "8900원",
      originalPrice: "11000원",
      remaining: 2
    }
  ];
  
  export { storeData, menuData };
  
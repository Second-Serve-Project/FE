const MenuContainer = ({ menuData, onModalOpen }) => {
    return (
      <div className="menu_container">
        {menuData.map((item) => (
          <div key={item.id} className="menu">
            <img className="menu_img" src={item.imgUrl} alt={item.name} />
            <div className="info_container">
              <div className="menu_name">{item.name}</div>
              <div className="menu_list">{item.items.join(", ")}</div>
              <div className="menu_cost">
                <div className="sale_price">{item.salePrice}</div>
                <div className="origin_price">{item.originalPrice}</div>
              </div>
            </div>
            <div className="menu_buy">
              <button className="buy_btn" onClick={() => onModalOpen(item)}>
                선택
              </button>
              <div className="menu_remain">잔여: {item.remaining}</div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default MenuContainer;
  
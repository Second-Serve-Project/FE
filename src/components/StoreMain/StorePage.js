import React, { useState } from 'react';
import { storeData, menuData } from './DummyData'; // 더미 데이터 import
import StoreDetails from './StoreContainer'; // 가게 정보 컴포넌트 import
import MenuContainer from './MenuContainer'; // 메뉴 정보 컴포넌트 import
import BackButton from "../Back/BackButton"; // BackButton 컴포넌트 import
import Modal from './Modal'; // Modal 컴포넌트 import
import "./StorePaged.css";

const StorePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleModalOpen = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleModalClose = () => setIsModalOpen(false);

  return (
    <div id="main">
      <BackButton /> {/* 뒤로 가기 버튼 추가 */}
      
      {/* 가게 정보 컴포넌트 렌더링 */}
      <StoreDetails storeData={storeData} />
      
      {/* 메뉴 정보 컴포넌트 렌더링 */}
      <div className="store_container">
        <MenuContainer menuData={menuData} onModalOpen={handleModalOpen} />
      </div>

      {/* 모달이 열리면 Modal 컴포넌트 렌더링 */}
      {isModalOpen && selectedItem && (
        <Modal selectedItem={selectedItem} onClose={handleModalClose} />
      )}
    </div>
  );
};

export default StorePage;

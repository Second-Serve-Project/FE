import React, { useState } from 'react';
import './StorePaged.css'; 
import plus from "../../images/plus.png";
import minus from "../../images/minus.png";

const Modal = ({ selectedItem, onClose }) => {
    // 수량 상태 관리
    const [quantity, setQuantity] = useState(1);
    // 픽업 시간 선택 상태 관리
    const [pickupTime, setPickupTime] = useState('none');
    // 다회용기 사용 여부 상태 관리
    const [useReusableContainer, setUseReusableContainer] = useState(false);

    // 수량 증가
    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    // 수량 감소
    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    // 픽업 시간 변경
    const handlePickupTimeChange = (e) => {
        setPickupTime(e.target.value);
    };

    // 다회용기 사용 체크박스 변경
    const handleCheckboxChange = () => {
        setUseReusableContainer(!useReusableContainer);
    };

    return (
        <div id="modal_container">
            <div className="modal_content">
                <div className="menu">
                    <img className="menu_img" src={selectedItem.imgUrl} alt={selectedItem.name} />
                    <div className="info_container">
                        <div className="menu_name">{selectedItem.name}</div>
                        <div className="menu_list">{selectedItem.items.join(", ")}</div>
                        <div className="menu_cost">
                            <div className="sale_price">{selectedItem.salePrice}</div>
                            <div className="origin_price">{selectedItem.originalPrice}</div>
                        </div>
                    </div>
                    <div className="menu_remain">{selectedItem.remaining}개 남음</div>
                </div>

                {/* 수량 조정 부분 */}
                <div className="quantity_container">
                    <div className="quantity">수량</div>
                    <button className="minus" onClick={decreaseQuantity}>
                        <img src={minus} alt="Decrease" />
                    </button>
                    <div className="num">{quantity}</div>
                    <button className="plus" onClick={increaseQuantity}>
                        <img src={plus} alt="Increase" />
                    </button>
                </div>

                {/* 픽업 시간 선택 부분 */}
                <div className="selectbox_container">
                    <select
                        name="what_time"
                        value={pickupTime}
                        onChange={handlePickupTimeChange}
                        className="select_box"
                    >
                        <option value="none">픽업 시간 설정</option>
                        <option value="1">00:00 ~ 12:00</option>
                        <option value="2">13:00 ~ 17:00</option>
                        <option value="3">18:00 ~ 24:00</option>
                    </select>
                </div>

                {/* 다회용기 사용 체크박스 */}
                <div className="checkbox_container">
                    <input
                        type="checkbox"
                        checked={useReusableContainer}
                        onChange={handleCheckboxChange}
                        className="checkbox"
                    />
                    다회용기 사용
                </div>

                {/* 결제 버튼 */}
                <div className="modal_payment_container">
                    <button className='payment_btn' onClick={onClose}>결제</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;

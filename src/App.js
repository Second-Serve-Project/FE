import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainRender from "./components/Main/MainRender";
import PickUpRender from "./components/PickUp/PickUPRender";
import ChangePWRender from "./components/ChangePW/ChangePWRender";
import LoginRender from "./components/Login/LoginRender";
import MemberInfoRender from "./components/MemberInfo/memberinforender";
import JoinRender from "./components/Signup/JoinRender";
import StoreRender from "./components/Store/storerender";
import StorePageRender from "./components/StoreMain/StorePage";

import "./style.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainRender />} />
        <Route path="/pickup" element={<PickUpRender />} />
        <Route path="changepw/" element={<ChangePWRender />} />
        <Route path="/login" element={<LoginRender />} />
        <Route path="/mypage" element={<MemberInfoRender />} />
        <Route path="/join" element={<JoinRender />} />
        <Route path="/store" element={<StoreRender />} />
        <Route path="/storepage" element={<StorePageRender />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
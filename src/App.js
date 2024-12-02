import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
import PickUp from "./pages/PickUp";
import ChangePW from "./pages/ChangePW";
//여기에 페이지 import 해주세요. ex) import Main from "./pages/Main";
//<Route> 태그도 <Routes> 태그 안에 추가해주세요. ex) <Route path="/" element={<Main />} />
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/pickup" element={<PickUp />} />
        <Route path="/changePW" element={<ChangePW />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
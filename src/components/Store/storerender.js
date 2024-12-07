import React from "react";
import BackRender from "../Back/BackRender";
import FooterButtons from "../Footer/FooterButtons";
import Store from "../Store/store";

import "../Store/storeinfo.css";

function StoreRender() {
  return (
    <div id="main">
      <BackRender />
      <div className="store_container">
        <Store />
      </div>
      <FooterButtons />
    </div>
  );
}

export default StoreRender;
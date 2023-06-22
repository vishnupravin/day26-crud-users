import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

function PortalLayout() {
  return (
    <div className="App">
      <div id="wrapper">
        <SideBar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <TopBar />
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortalLayout;

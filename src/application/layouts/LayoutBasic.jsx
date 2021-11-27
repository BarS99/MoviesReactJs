import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";

const LayoutBasic = () => {
  return (
    <div className="layout layout-basic">
      <Header />
      <Outlet />
    </div>
  );
};

export default LayoutBasic;

import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LayoutBasic = () => {
  return (
    <div className="layout layout-basic">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LayoutBasic;

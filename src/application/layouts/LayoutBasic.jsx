import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LayoutBasic = (props) => {
  return (
    <div className="layout layout-basic min-vh-100 d-flex flex-column w-100 position-sticky">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LayoutBasic;

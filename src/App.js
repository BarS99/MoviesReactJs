import React from "react";
import { Routes, Route } from "react-router-dom";
import LayoutBasic from "./application/layouts/LayoutBasic";
import Index from "./application/pages/Index";
import Page404 from "./application/pages/Page404";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LayoutBasic />}>
          <Route path="" element={<Index />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

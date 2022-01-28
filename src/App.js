import React from "react";
import { Routes, Route } from "react-router-dom";
import LayoutBasic from "./application/layouts/LayoutBasic";
import Index from "./application/pages/Index";
import Page404 from "./application/pages/Page404";
import Movies from "./application/pages/Movies";
import Series from "./application/pages/Series";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LayoutBasic />}>
          <Route path="" element={<Index />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

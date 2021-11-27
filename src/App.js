import React from "react";
import { Routes, Route } from "react-router-dom";
import LayoutBasic from "./application/layouts/LayoutBasic";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LayoutBasic />}>
          <Route path="" element={<></>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

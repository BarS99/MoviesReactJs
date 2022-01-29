import React, { useLayoutEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import LayoutBasic from "./application/layouts/LayoutBasic";
import Index from "./application/pages/Index";
import Page404 from "./application/pages/Page404";
import Movies from "./application/pages/Movies";
import Series from "./application/pages/Series";
import Contact from "./application/pages/Contact";
import MediaView from "./application/pages/MediaView";
import { Spinner } from "react-bootstrap";

function App() {
  let navigate = useNavigate();
  const [loader, setLoader] = useState(true);

  useLayoutEffect(() => {
    const displayLoader = async () => {
      setLoader((prev) => {
        return true;
      });

      try {
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 500);
        });

        setLoader((prev) => {
          return false;
        });
      } catch {}
    };

    displayLoader();
  }, [navigate]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LayoutBasic />}>
          <Route path="" element={<Index />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/media-view/:id" element={<MediaView />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
      {loader && (
        <div className="position-fixed top-0 start-0 end-0 bottom-0 bg-black d-flex align-items-center justify-content-center">
          <Spinner animation="border" variant="white" />
          <div className="text-white fs-4 ms-4">Loading...</div>
        </div>
      )}
    </div>
  );
}

export default App;

import React, { Suspense } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import WelcomePage from "./Pages/WelcomePage";
import MainPage from "./Pages/MainPage";
import NotFoundPage from "./Pages/NotFoundPage";

const App = () => {
  return (
    <div className="main">
      <Router>
        <Suspense fallback={<div className="loading-skeleton"></div>}>
          <Routes>
            <Route path="/RandomGif" element={<WelcomePage />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;

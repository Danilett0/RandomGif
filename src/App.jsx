import React, { Suspense, lazy } from "react";
import { HashRouter  as Router, Route, Routes } from "react-router-dom";
const WelcomePage = lazy(() => import("./Pages/WelcomePage"));
const MainPage = lazy(() => import("./Pages/MainPage"));
const NotFoundPage = lazy(() => import("./Pages/NotFoundPage"));

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

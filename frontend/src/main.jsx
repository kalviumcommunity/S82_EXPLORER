import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import TravelerReviewsPage from "./pages/TravelerReviewsPage";
import FoodGuidePage from "./pages/FoodGuidePage";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/traveler-reviews" element={<TravelerReviewsPage />} />
        <Route path="/food-guide" element={<FoodGuidePage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import FoodGuidePage from "./pages/FoodGuidePage"; 

import PlaceCard from "./components/PlaceCard";

function App() {
  const navigate = useNavigate();

  const handleFeatureClick = (feature) => {
    if (feature === "food") navigate("/food-guide");
    if (feature === "reviews") navigate("/traveler-reviews");
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100 text-gray-800 font-sans">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20 px-6 text-center shadow-lg">
              <h1 className="text-5xl font-extrabold mb-4 tracking-wide drop-shadow-lg">🌍 Explorer</h1>
              <p className="text-xl max-w-2xl mx-auto leading-relaxed">
                Discover places, taste local food, and stay at the best hotels — all near you.
              </p>
              <button className="mt-8 px-8 py-3 bg-white text-indigo-700 font-bold rounded-full shadow-lg hover:bg-indigo-100 transition duration-300">
                Start Exploring
              </button>
            </section>

            {/* Features */}
            <section className="py-16 px-6 max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-center text-indigo-800 mb-14">✨ Features You'll Love</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <FeatureCard
                  color="from-pink-400 to-red-400"
                  title="📍 Location Detection"
                  description="Get real-time suggestions based on your GPS location."
                />
                <FeatureCard
                  color="from-yellow-400 to-orange-500"
                  title="🏨 Hotel Picks"
                  description="Explore hotels nearby with reviews, prices, and availability."
                />
                <FeatureCard
                  color="from-green-400 to-emerald-500"
                  title="🍽️ Food Guide"
                  description="Discover local dishes and must-try spots."
                  onClick={() => handleFeatureClick("food")}
                />
                <FeatureCard
                  color="from-cyan-400 to-blue-500"
                  title="🗺️ Google Maps"
                  description="Turn-by-turn directions and map navigation built-in."
                />
                <FeatureCard
                  color="from-purple-400 to-violet-500"
                  title="⭐ Traveler Reviews"
                  description="Get insights from real people before visiting."
                  onClick={() => handleFeatureClick("reviews")}
                />
                <FeatureCard
                  color="from-rose-400 to-pink-500"
                  title="❤️ Favorites"
                  description="Save and revisit your favorite places and food stops."
                />
              </div>
            </section>

            {/* About Section */}
            <section className="bg-gradient-to-r from-indigo-100 to-pink-100 py-20 px-6 shadow-inner">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-indigo-700 mb-6">🎯 Why Explorer?</h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  Whether you're on vacation or exploring your own city, Explorer helps you uncover hidden gems, taste the best food, and rest comfortably — all in one easy-to-use app.
                </p>
              </div>
            </section>

            {/* Footer */}
            <footer className="py-10 text-center text-sm text-gray-600 bg-gradient-to-t from-white to-blue-100">
              © {new Date().getFullYear()} Explorer App — Built for curious wanderers 🌎
            </footer>
          </div>
        }
      />
      <Route path="/traveler-reviews" element={<PlaceCard />} />
      <Route path="/food-guide" element={<FoodGuidePage />} />
    </Routes>
  );
}

const FeatureCard = ({ title, description, color, onClick }) => (
  <div
    onClick={onClick}
    className={`cursor-pointer bg-gradient-to-br ${color} text-white rounded-2xl p-6 shadow-xl transform hover:scale-105 transition duration-300`}
  >
    <h3 className="text-xl font-bold mb-2 drop-shadow-sm">{title}</h3>
    <p className="text-sm">{description}</p>
  </div>
);

export default App;

import React from "react";
import PlaceCard from "../components/PlaceCard";
import { Link } from "react-router-dom";

const TravelerReviewsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-yellow-100 to-blue-100 text-gray-800 p-6">
      <h1 className="text-4xl font-bold text-center text-indigo-800 mb-8">
        ⭐ Traveler Reviews
      </h1>

      <div className="flex justify-center">
        <PlaceCard
          name="Marina Beach"
          location="Chennai, India"
          description="A beautiful urban beach popular with locals and tourists."
          rating={4.5}
        />
      </div>

      <div className="text-center mt-8">
        <Link
          to="/"
          className="inline-block px-6 py-2 bg-indigo-600 text-white rounded-full shadow-md hover:bg-indigo-700 transition"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default TravelerReviewsPage;

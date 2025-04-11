// FoodGuidePage.jsx
import React from 'react';
import FoodCard from '../components/FoodCard';

const FoodGuidePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100">
      <header className="text-center py-10 text-4xl font-bold text-pink-700">
        🍽️ Explore Local Food
      </header>
      <FoodCard />
    </div>
  );
};

export default FoodGuidePage;

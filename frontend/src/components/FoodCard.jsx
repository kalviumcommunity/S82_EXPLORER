import React from "react";
import { useNavigate } from "react-router-dom";

const FoodCardPage = () => {
  const navigate = useNavigate();

  const foodReviews = [
    {
      id: 1,
      dish: "Hyderabadi Biryani",
      restaurant: "Bawarchi",
      location: "RTC X Roads, Hyderabad",
      comment: "Absolutely bursting with flavors. The aroma is unforgettable!",
      rating: 5,
    },
    {
      id: 2,
      dish: "Dosa",
      restaurant: "Chutneys",
      location: "Jubilee Hills, Hyderabad",
      comment: "Crispy dosa with heavenly coconut chutney. Loved the sambhar too!",
      rating: 4.5,
    },
    {
      id: 3,
      dish: "Gongura Mutton",
      restaurant: "Rayalaseema Ruchulu",
      location: "Banjara Hills, Hyderabad",
      comment: "Spicy and authentic. A gem for spice lovers!",
      rating: 5,
    },
    {
      id: 4,
      dish: "Mysore Pak",
      restaurant: "Karachi Bakery",
      location: "Moazzam Jahi Market, Hyderabad",
      comment: "Sweet perfection. Rich and melts in the mouth.",
      rating: 4,
    },
    {
      id: 5,
      dish: "Irani Chai",
      restaurant: "Cafe Niloufer",
      location: "Lakdikapul, Hyderabad",
      comment: "Creamy, strong, and perfectly paired with Osmania biscuits!",
      rating: 4.8,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-pink-100 to-yellow-100 p-8 text-gray-800 font-sans">
      <h1 className="text-4xl font-bold text-center text-rose-600 mb-12">
        🍲 Food Reviews
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {foodReviews.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-3xl shadow-lg p-6 border border-yellow-200 hover:shadow-xl transition duration-300"
          >
            <h2 className="text-xl font-bold text-rose-700 mb-1">
              {review.dish}
            </h2>
            <p className="text-sm text-gray-600 mb-1">
              <span className="font-semibold">Restaurant:</span> {review.restaurant}
            </p>
            <p className="text-sm text-gray-600 mb-1">
              <span className="font-semibold">📍 Location:</span> {review.location}
            </p>
            <p className="italic text-gray-700 mb-3">“{review.comment}”</p>
            <p className="text-yellow-600 font-bold">⭐ {review.rating} / 5</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <button
          onClick={() => navigate("/")}
          className="px-8 py-3 bg-rose-600 text-white text-lg font-semibold rounded-full shadow-md hover:bg-rose-700 transition duration-300"
        >
          ⬅️ Back to Home
        </button>
      </div>
    </div>
  );
};

export default FoodCardPage;

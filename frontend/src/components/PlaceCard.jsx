import React from "react";

const PlaceCard = () => {
  const reviews = [
    {
      title: "The Grand Lakeview Hotel",
      description: "Amazing view and exceptional service. Definitely coming back next time!",
      rating: 4.8,
      location: "Nainital, India",
    },
    {
      title: "Sunset Point Cafe",
      description: "Delicious food and the best place to watch sunsets!",
      rating: 4.5,
      location: "Goa, India",
    },
    {
      title: "Mountain Escape Resort",
      description: "Peaceful, cozy and surrounded by nature. Loved every bit of it.",
      rating: 4.7,
      location: "Manali, India",
    },
    {
      title: "The Royal Heritage Hotel",
      description: "Felt like royalty! Beautiful architecture and great hospitality.",
      rating: 4.9,
      location: "Jaipur, India",
    },
    {
      title: "Coastal Breeze Diner",
      description: "Best seafood platter I’ve had. Cozy vibes and friendly staff!",
      rating: 4.6,
      location: "Kochi, India",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {reviews.map((review, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-indigo-500 hover:shadow-xl transition duration-300"
        >
          <h3 className="text-xl font-bold text-indigo-700 mb-2">{review.title}</h3>
          <p className="text-sm text-gray-700 mb-3">{review.description}</p>
          <div className="flex justify-between text-sm text-gray-600">
            <span>📍 {review.location}</span>
            <span>⭐ {review.rating}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlaceCard;

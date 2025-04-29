import React, { useEffect, useState } from "react";
import axios from "axios";

const UserPlaces = () => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState("");
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    // Fetch all users
    axios.get("http://localhost:5000/api/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("Failed to load users", err));
  }, []);

  const handleUserChange = (e) => {
    const userId = e.target.value;
    setSelectedUserId(userId);
    if (userId) {
      axios.get(`http://localhost:5000/api/places/user/${userId}`)
        .then((res) => setPlaces(res.data))
        .catch((err) => console.error("Failed to load places", err));
    } else {
      setPlaces([]);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-indigo-700">Filter Places by User</h2>
      
      <select
        className="border p-2 rounded mb-6"
        value={selectedUserId}
        onChange={handleUserChange}
      >
        <option value="">Select a user</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.username}
          </option>
        ))}
      </select>

      {places.length > 0 ? (
        <ul className="space-y-4">
          {places.map((place) => (
            <li key={place.id} className="p-4 bg-white rounded shadow">
              <h3 className="text-lg font-semibold">{place.name}</h3>
              <p>{place.description}</p>
              <p className="text-sm text-gray-500">Ingredients: {place.ingredients}</p>
            </li>
          ))}
        </ul>
      ) : (
        selectedUserId && <p className="text-gray-600">No places found for this user.</p>
      )}
    </div>
  );
};

export default UserPlaces;

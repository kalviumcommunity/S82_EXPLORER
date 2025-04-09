import { useState, useEffect } from 'react';
import axios from 'axios';

function AddPlace() {
  const [places, setPlaces] = useState([]);
  const [formData, setFormData] = useState({
    place: '',
    visit: '',
    reason: ''
  });

  useEffect(() => {
    fetchPlaces();
  }, []);

  const fetchPlaces = () => {
    axios.get('http://localhost:5555/places')
      .then(res => setPlaces(res.data))
      .catch(err => console.error(err));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5555/places', formData)
      .then(() => {
        fetchPlaces();
        setFormData({ place: '', visit: '', reason: '' });
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="p-4">
      <h2>Add a New Place 🧭</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="place" placeholder="Place" value={formData.place} onChange={handleChange} required />
        <input type="text" name="visit" placeholder="Visit Info" value={formData.visit} onChange={handleChange} required />
        <input type="text" name="reason" placeholder="Reason" value={formData.reason} onChange={handleChange} />
        <button type="submit">Add</button>
      </form>

      <h3>Places List:</h3>
      <ul>
        {places.map((placeItem, i) => (
          <li key={i}>
            <strong>{placeItem.place || placeItem.name}</strong> - {placeItem.visit || "No Visit Info"} <br />
            <i>{placeItem.reason || "No reason"}</i>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddPlace;

import { useState } from 'react';
import axios from 'axios';

const UpdateForm = ({ item, onClose, onUpdated }) => {
  const [formData, setFormData] = useState({
    place: item.place,
    visit: item.visit,
    reason: item.reason
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5555/objects/${item._id}`, formData)
      .then(() => {
        onUpdated();
        onClose();
      })
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleUpdate}>
      <input
        name="place"
        value={formData.place}
        onChange={handleChange}
        placeholder="Place"
      />
      <input
        name="visit"
        value={formData.visit}
        onChange={handleChange}
        placeholder="What to Visit"
      />
      <input
        name="reason"
        value={formData.reason}
        onChange={handleChange}
        placeholder="Why Visit?"
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateForm;

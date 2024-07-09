import React, { useState } from 'react';
import PropertyService from '../../services/PropertyService';

const PropertyForm = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProperty = { name, location };
    await PropertyService.createProperty(newProperty);
    setName('');
    setLocation('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Property</h2>
      <div>
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Location</label>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default PropertyForm;

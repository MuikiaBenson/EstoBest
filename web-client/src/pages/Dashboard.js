import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      const res = await axios.get('/api/properties');
      setProperties(res.data);
    };
    fetchProperties();
  }, []);

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="properties">
        {properties.map(property => (
          <div key={property.id} className="property">
            <h3>{property.name}</h3>
            <p>{property.address}</p>
            <p>Status: {property.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

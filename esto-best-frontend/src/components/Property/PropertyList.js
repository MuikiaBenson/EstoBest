import React, { useState, useEffect } from 'react';
import PropertyService from '../../services/PropertyService';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      const response = await PropertyService.getAllProperties();
      setProperties(response);
    };
    fetchProperties();
  }, []);

  return (
    <div>
      <h2>Property List</h2>
      <div style={{ backgroundColor: 'red' }}>
        <p>loreum </p>
        <ul>
          {properties.map((property) => (
            <li key={property.id}>{property.name} - {property.location}</li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default PropertyList;

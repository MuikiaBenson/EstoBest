import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropertyService from '../../services/PropertyService';

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      const response = await PropertyService.getPropertyById(id);
      setProperty(response);
    };
    fetchProperty();
  }, [id]);

  if (!property) return <div>Loading...</div>;

  return (
    <div>
      <h2>Property Details</h2>
      <p>{property.name}</p>
      <p>{property.location}</p>
    </div>
  );
};

export default PropertyDetails;

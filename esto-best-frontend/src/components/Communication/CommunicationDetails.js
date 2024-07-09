import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommunicationService from '../../services/CommunicationService';

const CommunicationDetails = () => {
  const { id } = useParams();
  const [communication, setCommunication] = useState(null);

  useEffect(() => {
    const fetchCommunication = async () => {
      const response = await CommunicationService.getCommunicationById(id);
      setCommunication(response);
    };
    fetchCommunication();
  }, [id]);

  if (!communication) return <div>Loading...</div>;

  return (
    <div>
      <h2>Communication Details</h2>
      <p>{communication.title}</p>
      <p>{communication.message}</p>
    </div>
  );
};

export default CommunicationDetails;

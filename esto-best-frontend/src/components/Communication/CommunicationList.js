import React, { useState, useEffect } from 'react';
import CommunicationService from '../../services/CommunicationService';

const CommunicationList = () => {
  const [communications, setCommunications] = useState([]);

  useEffect(() => {
    const fetchCommunications = async () => {
      const response = await CommunicationService.getAllCommunications();
      setCommunications(response);
    };
    fetchCommunications();
  }, []);

  return (
    <div>
      <h2>Communication List</h2>
      <ul>
        {communications.map((communication) => (
          <li key={communication.id}>{communication.title} - {communication.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommunicationList;

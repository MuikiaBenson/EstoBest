import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MaintenanceService from '../../services/MaintenanceService';

const MaintenanceDetails = () => {
  const { id } = useParams();
  const [maintenance, setMaintenance] = useState(null);

  useEffect(() => {
    const fetchMaintenance = async () => {
      const response = await MaintenanceService.getMaintenanceById(id);
      setMaintenance(response);
    };
    fetchMaintenance();
  }, [id]);

  if (!maintenance) return <div>Loading...</div>;

  return (
    <div>
      <h2>Maintenance Details</h2>
      <p>{maintenance.description}</p>
      <p>{maintenance.status}</p>
    </div>
  );
};

export default MaintenanceDetails;

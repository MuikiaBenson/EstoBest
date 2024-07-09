import React, { useState, useEffect } from 'react';
import MaintenanceService from '../../services/MaintenanceService';

const MaintenanceList = () => {
  const [maintenances, setMaintenances] = useState([]);

  useEffect(() => {
    const fetchMaintenances = async () => {
      const response = await MaintenanceService.getAllMaintenances();
      setMaintenances(response);
    };
    fetchMaintenances();
  }, []);

  return (
    <div>
      <h2>Maintenance List</h2>
      <ul>
        {maintenances.map((maintenance) => (
          <li key={maintenance.id}>{maintenance.description} - {maintenance.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default MaintenanceList;

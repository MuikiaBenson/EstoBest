import React, { useState } from 'react';
import MaintenanceService from '../../services/MaintenanceService';

const MaintenanceForm = () => {
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newMaintenance = { description, status };
    await MaintenanceService.createMaintenance(newMaintenance);
    setDescription('');
    setStatus('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Maintenance</h2>
      <div>
        <label>Description</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div>
        <label>Status</label>
        <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default MaintenanceForm;

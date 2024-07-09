import React, { useState } from 'react';
import CommunicationService from '../../services/CommunicationService';

const CommunicationForm = () => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCommunication = { title, message };
    await CommunicationService.createCommunication(newCommunication);
    setTitle('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Communication</h2>
      <div>
        <label>Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Message</label>
        <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default CommunicationForm;

import React, { useState } from 'react';
import NotificationService from '../../.services/NotificationService';

const NotificationForm = () => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newNotification = { title, message };
    await NotificationService.createNotification(newNotification);
    setTitle('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Notification</h2>
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

export default NotificationForm;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NotificationService from '../../services/NotificationService';

const NotificationDetails = () => {
  const { id } = useParams();
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const fetchNotification = async () => {
      const response = await NotificationService.getNotificationById(id);
      setNotification(response);
    };
    fetchNotification();
  }, [id]);

  if (!notification) return <div>Loading...</div>;

  return (
    <div>
      <h2>Notification Details</h2>
      <p>{notification.title}</p>
      <p>{notification.message}</p>
    </div>
  );
};

export default NotificationDetails;

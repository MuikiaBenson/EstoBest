import React, { useState, useEffect } from 'react';
import NotificationService from '../../services/NotificationService';

const NotificationList = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      const response = await NotificationService.getAllNotifications();
      setNotifications(response);
    };
    fetchNotifications();
  }, []);

  return (
    <div>
      <h2>Notification List</h2>
      <ul>
        {notifications.map((notification) => (
          <li key={notification.id}>{notification.title} - {notification.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationList;

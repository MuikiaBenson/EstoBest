import axios from 'axios';

const API_URL = process.env.REACT_APP_NOTIFICATION_SERVICE_URL;

const NotificationService = {
  getAllNotifications: async () => {
    const response = await axios.get(`${API_URL}/notifications`);
    return response.data;
  },
  getNotificationById: async (id) => {
    const response = await axios.get(`${API_URL}/notifications/${id}`);
    return response.data;
  },
  addNotification: async (notificationData) => {
    const response = await axios.post(`${API_URL}/notifications`, notificationData);
    return response.data;
  },
  updateNotification: async (id, notificationData) => {
    const response = await axios.put(`${API_URL}/notifications/${id}`, notificationData);
    return response.data;
  },
  deleteNotification: async (id) => {
    const response = await axios.delete(`${API_URL}/notifications/${id}`);
    return response.data;
  },
};

export default NotificationService;

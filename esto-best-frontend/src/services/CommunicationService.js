import axios from 'axios';

const API_URL = process.env.REACT_APP_COMMUNICATION_SERVICE_URL;

const CommunicationService = {
  getAllMessages: async () => {
    const response = await axios.get(`${API_URL}/communications`);
    return response.data;
  },
  getMessageById: async (id) => {
    const response = await axios.get(`${API_URL}/communications/${id}`);
    return response.data;
  },
  addMessage: async (messageData) => {
    const response = await axios.post(`${API_URL}/communications`, messageData);
    return response.data;
  },
  updateMessage: async (id, messageData) => {
    const response = await axios.put(`${API_URL}/communications/${id}`, messageData);
    return response.data;
  },
  deleteMessage: async (id) => {
    const response = await axios.delete(`${API_URL}/communications/${id}`);
    return response.data;
  },
};

export default CommunicationService;

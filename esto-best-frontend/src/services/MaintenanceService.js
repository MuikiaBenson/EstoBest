import axios from 'axios';

const API_URL = process.env.REACT_APP_MAINTENANCE_SERVICE_URL;

const MaintenanceService = {
  getAllRequests: async () => {
    const response = await axios.get(`${API_URL}/maintenance`);
    return response.data;
  },
  getRequestById: async (id) => {
    const response = await axios.get(`${API_URL}/maintenance/${id}`);
    return response.data;
  },
  addRequest: async (requestData) => {
    const response = await axios.post(`${API_URL}/maintenance`, requestData);
    return response.data;
  },
  updateRequest: async (id, requestData) => {
    const response = await axios.put(`${API_URL}/maintenance/${id}`, requestData);
    return response.data;
  },
  deleteRequest: async (id) => {
    const response = await axios.delete(`${API_URL}/maintenance/${id}`);
    return response.data;
  },
};

export default MaintenanceService;

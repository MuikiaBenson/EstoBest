import axios from 'axios';

const API_URL = 'http://localhost:3008';

const UserService = {
  getAllUsers: async () => {
    const response = await axios.get(`${API_URL}/api/users`);
    return response.data;
  },
  getUserById: async (id) => {
    const response = await axios.get(`${API_URL}/api/users/${id}`);
    return response.data;
  },
  addUser: async (userData) => {
    const response = await axios.post(`${API_URL}/api/users`, userData);
    return response.data;
  },
  updateUser: async (id, userData) => {
    const response = await axios.put(`${API_URL}/api/users/${id}`, userData);
    return response.data;
  },
  deleteUser: async (id) => {
    const response = await axios.delete(`${API_URL}/api/users/${id}`);
    return response.data;
  },
  loginUser: async (credentials) => {
    try {
      const response = await axios.post(`${API_URL}/api/users/signin`, credentials);
      return response.data;
    } catch (error) {
      throw error; // Handle errors in the component that calls loginUser
    }
  },
};

export default UserService;

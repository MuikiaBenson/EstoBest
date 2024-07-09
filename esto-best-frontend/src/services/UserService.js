import axios from 'axios';

const API_URL = process.env.REACT_APP_USER_SERVICE_URL || 'http://localhost:3001';

const UserService = {
  getAllUsers: async () => {
    const response = await axios.get(`http://localhost:3008/api/users`);
    console.log(response);
    return response.data;
  },
  getUserById: async (id) => {
    const response = await axios.get(`${API_URL}/users/${id}`);
    return response.data;
  },
  addUser: async (userData) => {
    const response = await axios.post(`${API_URL}/users`, userData);
    return response.data;
  },
  updateUser: async (id, userData) => {
    const response = await axios.put(`${API_URL}/users/${id}`, userData);
    return response.data;
  },
  deleteUser: async (id) => {
    const response = await axios.delete(`${API_URL}/users/${id}`);
    return response.data;
  },
  loginUser: async (credentials) => {
    //const response = await axios.post(`${API_URL}/auth/login`, credentials);
    const response = await axios.post(`${API_URL}/api/users/signin`, credentials);

    return response.data;
  },
};

export default UserService;

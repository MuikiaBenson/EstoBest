import axios from 'axios';

//const API_URL = process.env.REACT_APP_PROPERTY_SERVICE_URL;
const API_URL = "http://localhost:3001/api/properties"

const PropertyService = {
  getAllProperties: async () => {
    const response = await axios.get(`${API_URL}`);
    return response.data;
  },
  getPropertyById: async (id) => {
    const response = await axios.get(`${API_URL}/properties/${id}`);
    console.log(response)
    return response.data;
  },
  addProperty: async (propertyData) => {
    const response = await axios.post(`${API_URL}`, propertyData);
    return response.data;
  },
  updateProperty: async (id, propertyData) => {
    const response = await axios.put(`${API_URL}/properties/${id}`, propertyData);
    return response.data;
  },
  deleteProperty: async (id) => {
    const response = await axios.delete(`${API_URL}/properties/${id}`);
    return response.data;
  },
};

export default PropertyService;

import axios from 'axios';

const API_URL = process.env.REACT_APP_PAYMENT_SERVICE_URL;

const PaymentService = {
  getAllPayments: async () => {
    const response = await axios.get(`${API_URL}/payments`);
    return response.data;
  },
  getPaymentById: async (id) => {
    const response = await axios.get(`${API_URL}/payments/${id}`);
    return response.data;
  },
  addPayment: async (paymentData) => {
    const response = await axios.post(`${API_URL}/payments`, paymentData);
    return response.data;
  },
  updatePayment: async (id, paymentData) => {
    const response = await axios.put(`${API_URL}/payments/${id}`, paymentData);
    return response.data;
  },
  deletePayment: async (id) => {
    const response = await axios.delete(`${API_URL}/payments/${id}`);
    return response.data;
  },
};

export default PaymentService;

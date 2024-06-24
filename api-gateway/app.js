const express = require('express');
const proxy = require('http-proxy-middleware');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

// Proxy routes
app.use('/api/users', proxy({ target: 'http://user-service:5000', changeOrigin: true }));
app.use('/api/properties', proxy({ target: 'http://property-service:5001', changeOrigin: true }));
app.use('/api/notifications', proxy({ target: 'http://notification-service:5002', changeOrigin: true }));
app.use('/api/payments', proxy({ target: 'http://payment-service:5003', changeOrigin: true }));
app.use('/api/messages', proxy({ target: 'http://communication-service:5004', changeOrigin: true }));
app.use('/api/maintenance', proxy({ target: 'http://maintenance-service:5005', changeOrigin: true }));

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`API Gateway running on port ${port}`);
});

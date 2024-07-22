const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// User Service Proxy
app.use('/api/users', createProxyMiddleware({
  target: 'http://localhost:3008', // Replace with your user-service port
  changeOrigin: true,
  pathRewrite: {
    '^/api/users': '', // Remove the '/api/users' prefix
  },
}));

// Property Service Proxy (example)
app.use('/api/properties', createProxyMiddleware({
  target: 'http://localhost:3001', // Replace with your property-service port
  changeOrigin: true,
  pathRewrite: {
    '^/api/properties': '', // Remove the '/api/properties' prefix
  },
}));

const PORT = 3009;
app.listen(PORT, () => {
  console.log(`API Gateway is running on http://localhost:${PORT}`);
});

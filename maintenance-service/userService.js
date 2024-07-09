const axios = require('axios');

async function fetchUserDetails(userId) {
  try {
    const response = await axios.get(`http://localhost:3008/api/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user details:', error.message);
    throw new Error('Failed to fetch user details');
  }
}

module.exports = { fetchUserDetails };

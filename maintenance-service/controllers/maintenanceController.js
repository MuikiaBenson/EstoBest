// controllers/maintenanceController.js
const MaintenanceRequest = require('../models/MaintenanceRequest');
const { fetchUserDetails } = require('../userService'); // Import userService

exports.createRequest = async (req, res) => {
  const { userId, propertyId, description } = req.body;

  try {
    const newRequest = new MaintenanceRequest({
      userId,
      propertyId,
      description,
    });

    const request = await newRequest.save();
    res.status(201).json(request);
  } catch (err) {
    console.error('Error creating maintenance request:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getRequests = async (req, res) => {
  try {
    const requests = await MaintenanceRequest.find();
    res.json(requests);
  } catch (err) {
    console.error('Error fetching maintenance requests:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getRequestById = async (req, res) => {
  try {
    const request = await MaintenanceRequest.findById(req.params.id);
    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }
    res.json(request);
  } catch (err) {
    console.error('Error fetching maintenance request by ID:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateRequest = async (req, res) => {
  try {
    const request = await MaintenanceRequest.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }
    res.json(request);
  } catch (err) {
    console.error('Error updating maintenance request:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteRequest = async (req, res) => {
  try {
    const request = await MaintenanceRequest.findByIdAndDelete(req.params.id);
    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }
    res.json({ message: 'Request removed' });
  } catch (err) {
    console.error('Error deleting maintenance request:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getUserForRequest = async (req, res) => {
  try {
    const userId = req.user.id; // Assuming userId is extracted from authentication middleware
    const user = await fetchUserDetails(userId);
    res.json(user);
  } catch (err) {
    console.error('Error fetching user details:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

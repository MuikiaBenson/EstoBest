const Maintenance = require('../models/Maintenance');

exports.addMaintenanceRequest = async (req, res) => {
  const { request, property_id, user_id } = req.body;
  try {
    const maintenance = new Maintenance({
      request,
      property_id,
      user_id
    });

    await maintenance.save();
    res.json(maintenance);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getMaintenanceRequests = async (req, res) => {
  try {
    const requests = await Maintenance.findAll();
    res.json(requests);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

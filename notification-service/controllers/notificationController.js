const Notification = require('../models/Notification');

exports.addNotification = async (req, res) => {
  const { message, user_id, type } = req.body;
  try {
    const notification = new Notification({
      message,
      user_id,
      type
    });

    await notification.save();
    res.json(notification);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.findAll();
    res.json(notifications);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

const Message = require('../models/Message');

exports.addMessage = async (req, res) => {
  const { message, sender_id, receiver_id, property_id } = req.body;
  try {
    const newMessage = new Message({
      message,
      sender_id,
      receiver_id,
      property_id
    });

    await newMessage.save();
    res.json(newMessage);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.findAll();
    res.json(messages);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

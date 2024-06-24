const Payment = require('../models/Payment');

exports.addPayment = async (req, res) => {
  const { amount, status, user_id, property_id } = req.body;
  try {
    const payment = new Payment({
      amount,
      status,
      user_id,
      property_id
    });

    await payment.save();
    res.json(payment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getPayments = async (req, res) => {
  try {
    const payments = await Payment.findAll();
    res.json(payments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

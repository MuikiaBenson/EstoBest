const Payment = require('../models/Payment');
const Mpesa = require('mpesa-node');
const dotenv = require('dotenv');

dotenv.config();

const mpesa = new Mpesa({
  consumerKey: process.env.MPESA_CONSUMER_KEY,
  consumerSecret: process.env.MPESA_CONSUMER_SECRET,
  environment: 'sandbox',
  shortCode: process.env.MPESA_SHORTCODE,
  lipaNaMpesaOnlineShortCode: process.env.MPESA_SHORTCODE,
  lipaNaMpesaOnlinePasskey: process.env.MPESA_PASSKEY,
});

const initiatePayment = async (req, res) => {
  const { userId, amount, phoneNumber } = req.body;

  try {
    const payment = new Payment({
      userId,
      amount,
      paymentMethod: 'mpesa',
    });

    const response = await mpesa.lipaNaMpesaOnline({
      BusinessShortCode: process.env.MPESA_SHORTCODE,
      Amount: amount,
      PartyA: phoneNumber,
      PartyB: process.env.MPESA_SHORTCODE,
      PhoneNumber: phoneNumber,
      CallBackURL: `${process.env.BASE_URL}/api/payments/confirm`,
      AccountReference: 'Payment for Rent/Utilities',
      TransactionDesc: 'Payment for Rent/Utilities',
    });

    payment.status = 'pending';
    await payment.save();

    res.status(201).json({
      message: 'Payment initiated successfully',
      paymentId: payment._id,
      mpesaResponse: response,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const confirmPayment = async (req, res) => {
  const { Body } = req.body;

  try {
    const payment = await Payment.findById(Body.stkCallback.CheckoutRequestID);

    if (Body.stkCallback.ResultCode === 0) {
      payment.status = 'completed';
    } else {
      payment.status = 'failed';
    }

    await payment.save();

    res.status(200).json({ message: 'Payment status updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  initiatePayment,
  confirmPayment,
};

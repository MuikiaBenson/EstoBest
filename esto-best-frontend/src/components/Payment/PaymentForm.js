import React, { useState } from 'react';
import PaymentService from '../../services/PaymentService';

const PaymentForm = ({ paymentId, onSave }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const paymentData = { description, amount };
    if (paymentId) {
      await PaymentService.updatePayment(paymentId, paymentData);
    } else {
      await PaymentService.addPayment(paymentData);
    }
    onSave();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default PaymentForm;

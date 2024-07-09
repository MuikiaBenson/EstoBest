import React, { useState, useEffect } from 'react';
import PaymentService from '../../services/PaymentService';
import { useParams } from 'react-router-dom';

const PaymentDetails = () => {
  const { id } = useParams();
  const [payment, setPayment] = useState(null);

  useEffect(() => {
    const fetchPayment = async () => {
      const response = await PaymentService.getPaymentById(id);
      setPayment(response);
    };
    fetchPayment();
  }, [id]);

  if (!payment) return <div>Loading...</div>;

  return (
    <div>
      <h2>Payment Details</h2>
      <p>ID: {payment.id}</p>
      <p>Description: {payment.description}</p>
      <p>Amount: {payment.amount}</p>
    </div>
  );
};

export default PaymentDetails;

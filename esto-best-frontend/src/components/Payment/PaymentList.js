import React, { useState, useEffect } from 'react';
import PaymentService from '../../services/PaymentService';

const PaymentList = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      const response = await PaymentService.getAllPayments();
      setPayments(response);
    };
    fetchPayments();
  }, []);

  return (
    <div>
      <h2>Payment List</h2>
      <ul>
        {payments.map((payment) => (
          <li key={payment.id}>{payment.description} - {payment.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentList;

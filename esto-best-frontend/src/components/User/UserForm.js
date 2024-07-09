import React, { useState } from 'react';
import UserService from '../../services/UserService';

const UserForm = ({ userId, onSave }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { name, email };
    if (userId) {
      await UserService.updateUser(userId, userData);
    } else {
      await UserService.addUser(userData);
    }
    onSave();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default UserForm;

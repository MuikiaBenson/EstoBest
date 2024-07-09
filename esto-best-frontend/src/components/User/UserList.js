import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import UserService from '../../services/UserService';

const UserListContainer = styled.div`
  margin-top: 20px;
`;

const UserTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeader = styled.thead`
  background-color: #f0f0f0;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 10px;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await UserService.getAllUsers();
        setUsers(response);
        setLoading(false);
      } catch (error) {
        setError('Error fetching users');
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <UserListContainer>
      <h2>User List</h2>
      <UserTable>
        <TableHeader>
          <TableRow>
            <th>Username</th>
            <th>Email</th>
            <th>Full Name</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Role</th>
            <th>Profile Picture</th>
            <th>Date of Birth</th>
          </TableRow>
        </TableHeader>
        <tbody>
          {users.map((user) => (
            <TableRow key={user._id}>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.fullName}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>{user.address}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                <ProfileImage
                  src={user.profilePicture}
                  alt={user.fullName}
                />
              </TableCell>
              <TableCell>
                {new Date(user.dateOfBirth).toLocaleDateString()}
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </UserTable>
    </UserListContainer>
  );
};

export default UserList;

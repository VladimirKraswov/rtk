import React from 'react';
import { useGetUsersQuery } from './apiSlice'; // Импортируйте хук

const UsersList = () => {
  const { data: users, error, isLoading } = useGetUsersQuery(); // Используйте хук

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;

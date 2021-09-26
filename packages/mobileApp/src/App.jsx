import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@test/shared/components';
import { fetchUsers } from '@test/storage/users';

import { UsersList } from './components';

export const App = () => {
  const dispatch = useDispatch();

  const loadUsers = () => dispatch(fetchUsers());

  return (
    <>
      <h1>Mobile</h1>
      <Button onClick={loadUsers}>Load users</Button>
      <UsersList />
    </>
  );
};

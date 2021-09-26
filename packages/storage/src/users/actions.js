import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_payload, { rejectWithValue, extra }) => {
    try {
      const { data } = await extra.api.get(
        'https://jsonplaceholder.typicode.com/users'
      );

      return data;
    } catch (e) {
      return rejectWithValue('Error');
    }
  }
);

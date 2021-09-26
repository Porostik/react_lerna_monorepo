import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './actions';

export const slice = createSlice({
  name: 'users',
  initialState: {
    loading: false,
    list: [],
  },
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.list = payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.loading = false;
      });
  },
});

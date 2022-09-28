import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPost = createAsyncThunk(
  'post/list',
  async (payload, { getState, dispatch }) => {
    try {
      const data = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      const res = data.json();
      return res;
    } catch (error) {
      return error.message;
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: { isLoggedIn: false, data: [] },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
  extraReducers: {
    [fetchPost.fulfilled]: (state, action) => {
      state.data = action.payload.data;
    },
    [fetchPost.rejected]: (state, action) => {
      state.data = action.payload.data;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;

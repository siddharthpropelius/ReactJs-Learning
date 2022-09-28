import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { counter: 0 },
  reducers: {
    increment: (state, action) => {
      state.counter++;
    },
    des: (state, action) => {
      state.counter--;
    },
    add: (state, action) => {
      state.counter += action.payload;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const actions = counterSlice.actions;
export default store;

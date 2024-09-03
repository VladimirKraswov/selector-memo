import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: Array.from({ length: 10000 }, (_, i) => ({ id: i, name: `User ${i}` })),
  activeUserId: 5000,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setActiveUser(state, action) {
      state.activeUserId = action.payload;
    }
  }
});

export const { setActiveUser } = userSlice.actions;

export const store = configureStore({
  reducer: userSlice.reducer,
});

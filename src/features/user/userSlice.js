import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  username: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.username = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.username = '';
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;

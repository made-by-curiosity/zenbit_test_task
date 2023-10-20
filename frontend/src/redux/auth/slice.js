import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, resetStore, signUp } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(resetStore.fulfilled, (state, action) => {
      state.user = {
        name: null,
        email: null,
      };
      state.token = null;
      state.isRefreshing = false;
    });
    builder.addCase(signUp.pending, (state, action) => {
      state.isRefreshing = true;
      state.error = null;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isRefreshing = false;
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.error = action.payload;
      state.isRefreshing = false;
    });
    builder.addCase(logIn.pending, (state, action) => {
      state.isRefreshing = true;
      state.error = null;
    });
    builder.addCase(logIn.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isRefreshing = false;
    });
    builder.addCase(logIn.rejected, (state, action) => {
      state.error = action.payload;
      state.isRefreshing = false;
    });
    builder.addCase(logOut.pending, (state, action) => {
      state.isRefreshing = true;
      state.error = null;
    });
    builder.addCase(logOut.fulfilled, state => {
      state.user = {
        name: null,
        email: null,
      };
      state.token = null;
      state.isRefreshing = false;
    });
    builder.addCase(logOut.rejected, (state, action) => {
      state.error = action.payload;
      state.isRefreshing = false;
    });
    builder.addCase(refreshUser.pending, state => {
      state.isRefreshing = true;
      state.error = null;
    });
    builder.addCase(refreshUser.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.isRefreshing = false;
    });
    builder.addCase(refreshUser.rejected, (state, action) => {
      state.error = action.payload;
      state.isRefreshing = false;
    });
  },
});

export const authReducer = authSlice.reducer;

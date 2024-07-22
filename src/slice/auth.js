import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  loggedIn: false,
  user: null,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUserStart: (state) => {
      state.isLoading = true;
    },
    signUserSuccess: (state, action) => {
      state.loggedIn = true;
      state.isLoading = false;
      state.user = action.payload;
      localStorage.setItem("token", action.payload.token);
    },
    signUserError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logOutUser: (state) => {
      state.loggedIn = false;
      state.user = null;
    },
  },
});

export const { signUserError, signUserStart, signUserSuccess, logOutUser } =
  authSlice.actions;

export default authSlice.reducer;

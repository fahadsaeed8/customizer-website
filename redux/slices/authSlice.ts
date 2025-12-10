import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  user: null,
  token: null,
  isAuthenticated: false,
  redirectPath: null, // ⭐ NEW
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<any>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },

    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.redirectPath = null;
    },

    setRedirectPath: (state, action: PayloadAction<string | null>) => {
      state.redirectPath = action.payload; // ⭐ NEW
    },
  },
});

export const { setCredentials, logout, setRedirectPath } = authSlice.actions;
export default authSlice.reducer;

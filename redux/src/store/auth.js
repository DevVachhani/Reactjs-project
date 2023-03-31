import { createSlice } from "@reduxjs/toolkit";

const initialAUthstate = {
  isAuthenicated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAUthstate,
  reducers: {
    login(state) {
      state.isAuthenicated = true;
    },
    logout(state) {
      state.isAuthenicated = false;
    },
  },
});

export const authAction = authSlice.actions;

export default authSlice.reducer;

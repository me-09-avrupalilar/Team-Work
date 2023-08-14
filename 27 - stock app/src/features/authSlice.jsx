import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    loading: false,
    error: false,
    isAdmin: false,
    token: null,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    fetchStart: (state) => {
        state.loading = true;
        state.error = false;
    }, 
    loginSuccess: (state, action) => {
        state.currentUser =  action.payload?.user?.username
        state.loading = false;
        state.isAdmin = action.payload?.user?.is_superuser;
        state.token = action.payload?.key
    },
    registerSuccess: (state) => {
        state.loading = false;
        state.error = false;
    }, 
    fetchFail: (state) => {
        state.loading = false;
        state.error = true;
    }
  },
});

// Action creators are generated for each case reducer function
export const { fetchStart, loginSuccess, fetchFail } = authSlice.actions;

export default authSlice.reducer;

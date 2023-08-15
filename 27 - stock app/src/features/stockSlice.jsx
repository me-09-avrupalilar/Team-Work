import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: false,
  firms: [],
  purchases: [], 
  brands: [],
  sales: [],
  products: [],
};

export const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getSuccess: (state, { payload: { stockName, data } }) => {
      state.loading = true;
      state.error = false;
      state[stockName] = data;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { fetchStart, getSuccess, fetchFail } = stockSlice.actions;

export default stockSlice.reducer;

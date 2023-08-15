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
   getFirmSuccess: (state, {payload}) => {
     state.loading = true;
     state.error = false;
     state.firms = payload;
   },
   getFirmFail: (state) => {
        state.loading = false;
        state.error = true;
   }
 
  },
});

// Action creators are generated for each case reducer function
export const { fetchStart, getFirmSuccess, getFirmFail } = stockSlice.actions;

export default stockSlice.reducer;

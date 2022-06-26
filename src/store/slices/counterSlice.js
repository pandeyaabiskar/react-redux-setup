import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  value: 0,
  isLoading: false
};

export const getProductData = createAsyncThunk("counter/getProductData", async (id) => {
  try{
    let res = await axios("http://localhost:8000/api/products");
    return res.data;
  } catch(err){

  }
});

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers:{
    [getProductData.pending]: (state) => {
      state.isLoading = true
    },
    [getProductData.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.isLoading = false

    },
    [getProductData.rejected]: (state) => {
      state.isLoading = false
    },
  }
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  products: [],
  error: "",
};

export const fetchProducts = createAsyncThunk("product/fetchProducts", async () => {
  const res = await fetch("https://fakestoreapi.com/products");
    return await res.json();
});

export const productSlice = createSlice({
    name : "product",
    initialState ,
    extraReducers : (builder) => {
        builder.addCase(fetchProducts.pending , (state) => {
            state.loading = true 
        })
        builder.addCase(fetchProducts.fulfilled , (state,action) => {
            state.loading = false ;
            state.products = action.payload 
        })
        builder.addCase(fetchProducts.rejected , (state,action) => {
            state.loading = false ;
            state.error = action.error.message 
        })
    }
});
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initalstate={
    products:[],
    isLoading:false,
};

export const getallproduct=createAsyncThunk('product',()=>{
    return fetch("http://localhost:5000/getproducts").then(resp=>resp.json()).catch((e)=>console.log(e))
})

const productSlice=createSlice({
    initialState:initalstate,
    name:"products",
    extraReducers: (builder)=>{
        builder.addCase(getallproduct.pending, (state) => {
            state.isLoading = true;
        })
        // builder.addCase(getallproduct.pending, (state) => {
        //     state.isLoading = true;
        //   }),
       
        .addCase(getallproduct.fulfilled ,(state, {payload}) => {
            console.log(payload);
            state.isLoading = false;
            state.products = payload;
          })
        .addCase(getallproduct.rejected, (state) => {
            state.isLoading = true;
          })
    }

});

export const productReducer=productSlice.reducer;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initalstate={
    popularProducts:[],
    isLoading:false,
};

export const getallpopularProduct=createAsyncThunk('popularProduct',()=>{
    return fetch("http://localhost:5000/popularproduct").then(resp=>resp.json()).catch((e)=>console.log(e))
})

const popularProductSlice=createSlice({
    initialState:initalstate,
    name:"popularProduct",
    extraReducers: (builder)=>{
        builder.addCase(getallpopularProduct.pending, (state) => {
            state.isLoading = true;
        })
        // builder.addCase(getallproduct.pending, (state) => {
        //     state.isLoading = true;
        //   }),
       
        .addCase(getallpopularProduct.fulfilled ,(state, {payload}) => {
            console.log(payload);
            state.isLoading = false;
            state.popularProducts = payload;
          })
        .addCase(getallpopularProduct.rejected, (state) => {
            state.isLoading = true;
          })
    }

});

export const popularProductReducer=popularProductSlice.reducer;
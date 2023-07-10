import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initalstate={
    products:[],
    isloading:false
}

export const getCategoryProducts=createAsyncThunk("CategoryProducts",async(name)=>{
    return fetch(`http://localhost:5000/getCategoryProduct/${name}`).then(resp=>resp.json()).catch((e)=>console.log(e))
});
const categoryProductSlice=createSlice({
    initialState:initalstate,
    name:"categoryProduct",
    extraReducers: (builder)=>{
        builder.addCase(getCategoryProducts.pending, (state) => {
            state.isloading = true;
        })
        // builder.addCase(getallproduct.pending, (state) => {
        //     state.isLoading = true;
        //   }),
       
        .addCase(getCategoryProducts.fulfilled ,(state, {payload}) => {
            console.log(payload);
            state.isloading = false;
            state.products = payload;
          })
        .addCase(getCategoryProducts.rejected, (state) => {
            state.isloading = true;
          })
    }

});

export const categoryProductReducer=categoryProductSlice.reducer;

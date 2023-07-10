import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initalstate={
    products:[],
    isloading:false
}

export const getSearchProducts=createAsyncThunk("SearchProducts",async(name)=>{
    return fetch(`http://localhost:5000/searchproduct/${name}`).then(resp=>resp.json()).catch((e)=>console.log(e))
});
const searchProductSlice=createSlice({
    initialState:initalstate,
    name:"searchProduct",
    extraReducers: (builder)=>{
        builder.addCase(getSearchProducts.pending, (state) => {
            state.isloading = true;
        })
        
        .addCase(getSearchProducts.fulfilled ,(state, {payload}) => {
            console.log(payload);
            state.isloading = false;
            state.products = payload;
          })
        .addCase(getSearchProducts.rejected, (state) => {
            state.isloading = true;
          })
    }

});

export const searchProductReducer=searchProductSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cartItems:[],
    totalamount:0,
    itemnumber:0,

}

const cartSlice=createSlice({
    initialState:initialState,
    name:"cart",
    reducers:{
        addtoCart:(state,action)=>{
            state.cartItems.push(action.payload);
            
            state.itemnumber=state.itemnumber+1;
        },
        removeItem:(state,action)=>{
            const itemId=action.payload;
            state.cartItems=state.cartItems.filter((item)=>item.name!==itemId);
            state.itemnumber=state.itemnumber-1;
        },
        calculateTotals:(state)=>{
            
            let total=0;
            state.cartItems.forEach((item)=>{
                
                total+=item.count * item.price;
            });
            state.totalamount=total;
        }
    }
});

export const {addtoCart,removeItem,calculateTotals} =cartSlice.actions;
export const cartReducer=cartSlice.reducer;
import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./features/productSlice";
import { cartReducer } from "./features/cartSlice";
import { popularProductReducer } from "./features/popularProductSlice";


export const store=configureStore({
    reducer:{
        products:productReducer,
        cart:cartReducer,
        popularProduct:popularProductReducer
    }
})
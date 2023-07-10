import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./features/productSlice";
import { cartReducer } from "./features/cartSlice";
import { popularProductReducer } from "./features/popularProductSlice";
import { favoriteReducer } from "./features/favoriteSlice";
import { categoryProductReducer } from "./features/categoryapis";
import { searchProductReducer } from "./features/searchProducts";


export const store=configureStore({
    reducer:{
        products:productReducer,
        cart:cartReducer,
        popularProduct:popularProductReducer,
        favorite:favoriteReducer,
        categoryProduct:categoryProductReducer,
        searchProduct:searchProductReducer
    }
})
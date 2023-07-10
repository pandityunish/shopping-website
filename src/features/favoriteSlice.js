import { createSlice } from "@reduxjs/toolkit";


const initalstate={
    favoriteItems:[]

}

const favoriteSlice=createSlice({
    initialState:initalstate,
    name:"favorite",
    reducers:{
        addtofavorite:(state,action)=>{
            state.favoriteItems.push(action.payload);

        },
        removefromfavorite:(state,action)=>{
            const itemId=action.payload;
          state.favoriteItems=  state.favoriteItems.filter((item)=>item.name!==itemId);
        }
    }
});

export const {addtofavorite,removefromfavorite} =favoriteSlice.actions;
export const favoriteReducer=favoriteSlice.reducer;
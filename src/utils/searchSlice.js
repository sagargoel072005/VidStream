import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState:{},
    reducers:{
        cacheResults:(state,action)=>{
          return {
        ...state,
        ...action.payload,
      };   //merge the payload and state // js es6 spread opeartor
        },
    },
});

export const {cacheResults}=searchSlice.actions;

export default searchSlice.reducer;
import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../Feature/post/PostSlice"

const store = configureStore({
    reducer: {
        post: postReducer, 
    },
})
export default store
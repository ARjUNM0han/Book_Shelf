import { configureStore } from "@reduxjs/toolkit";
import BookSlice from "./Slice/BookSlice";


const store = configureStore({
    reducer:{
        BookSlice,
    }
})

export default store
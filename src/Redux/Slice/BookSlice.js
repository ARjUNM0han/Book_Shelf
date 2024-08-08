import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const BookSlice = createSlice({
    name: 'books',
    initialState: { books: [] },
    reducers:{
        addBook:(state,action)=>{
           state.books = [...state.books, action.payload];
        }
    }
})

export const { addBook} = BookSlice.actions
export default BookSlice.reducer
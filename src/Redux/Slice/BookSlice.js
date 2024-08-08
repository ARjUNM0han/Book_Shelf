import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const BookSlice = createSlice({
    name: 'booklist',
    initialState: {
        booklist: []
    },
    reducers: {
        addBook: (state, action) => {
            state.booklist.push({...action.payload})
        },
        deleteBook: (state, action) => {
            state.booklist = state.booklist.filter((item) => item.id != action.payload)
        }
    }
})

export const { addBook, deleteBook } = BookSlice.actions
export default BookSlice.reducer
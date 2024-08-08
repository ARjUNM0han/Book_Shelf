import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const BookSlice = createSlice({
    name: 'booklist',
    initialState: {
        booklist: []
    },
    reducers: {
        addBook: (state, action) => {
            if (state.booklist.find((item) => item.id == action.payload.id)) {
                toast.info('book already added')
            } else {
                state.booklist.push({ ...action.payload })
            }
        },
        editBook: (state, action) => {
            const { id, updatedData } = action.payload;
            const bookToUpdate = state.booklist.find((item) => item.id === id);

            if (bookToUpdate) {
                bookToUpdate.bookName = updatedData.bookName;
                bookToUpdate.bookDescription = updatedData.bookDescription;
            toast.success('Book updated successfully');
            } else {
                toast.error('Book not found');
            }
        },
        deleteBook: (state, action) => {
            state.booklist = state.booklist.filter((item) => item.id != action.payload)
        }
    }
})

export const { addBook, deleteBook, editBook } = BookSlice.actions
export default BookSlice.reducer
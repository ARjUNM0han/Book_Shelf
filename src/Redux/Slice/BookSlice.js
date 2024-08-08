import { createSlice } from "@reduxjs/toolkit";

const BookSlice = createSlice({
    name: 'books',
    initialState : [],
    reducers:{
        addBook:(state,action)=>{
            state.books.push({...action.payload})
            alert('book added')
        }
    }
})

export const { addBook} = BookSlice.actions
export default BookSlice.reducer
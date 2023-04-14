import { createSlice } from "@reduxjs/toolkit";

const BookSlice = createSlice({
   name: "books",
   initialState: { books:null , userBooks:null },
   reducers: {
      getBooks: (state, action) => {
         state.books = action.payload.allbooks
         state.userBooks = action.payload.userBooks
      }
   }
});



export const { getBooks } = BookSlice.actions;

export default BookSlice.reducer;



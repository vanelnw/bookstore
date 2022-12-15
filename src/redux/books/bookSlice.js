import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    const response = await axios.get(
      'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/QpRUUxfujPND2DxFYCnB/books',
    );
    return response.data;
  },
);

export const createBook = createAsyncThunk('books/addBook', async (book) => {
  await axios.post(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/QpRUUxfujPND2DxFYCnB/books',
    book,
  );

  const response = await axios.get(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/QpRUUxfujPND2DxFYCnB/books',
  );
  return response.data;
});

export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  await axios.delete(
    `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/QpRUUxfujPND2DxFYCnB/books/${id}`,
  );
  const response = await axios.get(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/QpRUUxfujPND2DxFYCnB/books',
  );
  return response.data;
});

const bookSlice = createSlice({
  name: 'books',
  initialState,

  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.push(action.payload);
    });

    builder.addCase(createBook.fulfilled, (state, action) => {
      state.splice(0, state.length);
      state.push(action.payload);
    });

    builder.addCase(removeBook.fulfilled, (state, action) => {
      state.splice(0, state.length);
      state.push(action.payload);
    });
  },
});

export default bookSlice.reducer;

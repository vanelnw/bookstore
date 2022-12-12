import { configureStore } from '@reduxjs/toolkit';
import books from './books/books';
import categories from './cattegories/categories';

const store = configureStore({
  reducer: {
    books,
    categories,
  },
});

export default store;

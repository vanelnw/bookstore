import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../redux/books/bookSlice';
import AddBook from './AddBook';
import Book from './Book';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  if (books.length === 0) {
    return 'loading...';
  }

  return (
    <div>
      {Object.entries(books[0]).map(([k, v]) => (
        <Book key={k} book={v[0]} id={k} />
      ))}
      <AddBook />
    </div>
  );
};

export default Books;

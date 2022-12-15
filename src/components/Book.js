import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/bookSlice';

const Book = ({ id, book }) => {
  const { title, author, category } = book;
  const dispatch = useDispatch();
  return (
    <div className="bookContainer">
      <div>
        <span>{category}</span>
        <h1>{title}</h1>
        <h3>{author}</h3>
        <div className="buttons">
          <button type="button">Comments</button>
          <button type="button" onClick={() => dispatch(removeBook(id))}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div>
        <p>
          64%
        </p>
        <span>Completed</span>
      </div>
      <div>
        <p>CURRENT CHAPTER</p>
        <p>Chapter 17</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  book: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
};
export default Book;

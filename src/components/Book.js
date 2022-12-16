import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { removeBook } from '../redux/books/bookSlice';
import 'react-circular-progressbar/dist/styles.css';

const Book = ({ id, book }) => {
  const { title, author, category } = book;
  const dispatch = useDispatch();
  return (
    <div className="bookContainer">
      <div className="book-details">
        <span>{category}</span>
        <h1>{title}</h1>
        <h4>{author}</h4>
        <div className="buttons">
          <button className="btn" type="button">
            Comments
          </button>
          <button
            className="btn"
            type="button"
            onClick={() => dispatch(removeBook(id))}
          >
            Remove
          </button>
          <button className="btn" type="button">
            Edit
          </button>
        </div>
      </div>
      <div className="progress">
        <div className="circle">
          <CircularProgressbar value={67} />
        </div>
        <div className="text">
          <p>64%</p>
          <span>Completed</span>
        </div>
      </div>
      <div className="chapter-details">
        <p>CURRENT CHAPTER</p>
        <span>Chapter 17</span>
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

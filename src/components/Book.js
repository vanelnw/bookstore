import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { book } = props;
  return (
    <div className="bookContainer">
      <div>
        <span>{book.type}</span>
        <h1>{book.title}</h1>
        <h3>{book.author}</h3>
        <div className="buttons">
          <button type="button">Comments</button>
          <button type="button">Remove</button>
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
};
export default Book;

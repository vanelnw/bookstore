import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { createBook } from '../redux/books/books';

function AddBook() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [selected, setSelected] = useState('');

  const handleChange = (event) => {
    if (event.target.name === 'title') {
      setTitle(event.target.value);
    } else (setAuthor(event.target.value));
  };

  const handleSelect = (event) => {
    setSelected(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      createBook({
        id: uuidv4(),
        type: selected,
        title,
        author,
      }),
    );
  };

  return (
    <div>
      <h1>ADD NEW BOOK</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Book title" onChange={handleChange} />
        <input type="text" name="author" placeholder="Book Author" onChange={handleChange} />
        <select value={selected} onChange={handleSelect}>
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economie">Economie</option>
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}

export default AddBook;

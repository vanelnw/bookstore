import React from 'react';

function AddBook() {
  return (
    <div>
      <h1>ADD NEW BOOK</h1>
      <form>
        <input type="text" placeholder="Book title" />
        <select>
          <option>Action</option>
          <option>Science Fiction</option>
          <option>Economie</option>
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}

export default AddBook;

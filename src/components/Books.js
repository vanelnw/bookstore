import { Component } from 'react';
import AddBook from './AddBook';
import Book from './Book';

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [{
        id: 1, type: 'Action', title: 'The Hunger Games', author: 'Suzane Collins',
      }],
    };
  }

  render() {
    const { books } = this.state;
    return (
      <div>
        {books.map((book) => <Book key={book.id} book={book} />)}
        <AddBook />
      </div>
    );
  }
}

export default Books;

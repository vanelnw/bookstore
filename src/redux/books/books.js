// Reducer
export default function books(state = [], action = {}) {
  switch (action.type) {
    case 'CREATE_BOOK':
      return state.push(action.book);
    case 'REMOVE_BOOK':
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
}

// Action Creators

export function createBook(book) {
  return { type: 'CREATE_BOOK', book };
}

export function removeBook(id) {
  return { type: 'REMOVE_BOOK', id };
}

const CREATE_BOOK = 'bookstore/books/CREATE_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

// Reducer
const initialState = [
  {
    id: 1,
    type: 'Action',
    title: 'The Hunger Games',
    author: 'Suzane Collins',
  },
  {
    id: 2,
    type: 'Economie',
    title: 'Rich Dad Poor Dad',
    author: 'Robert T. Kiyosaki',
  },
];

export default function books(state = initialState, action = {}) {
  const index = state.indexOf(state.find((x) => x.id === action.id));

  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return [...state.slice(0, index), ...state.slice(index + 1)];
    default:
      return state;
  }
}

// Action Creators
export function createBook(book) {
  return { type: CREATE_BOOK, book };
}

export function removeBook(id) {
  return { type: REMOVE_BOOK, id };
}

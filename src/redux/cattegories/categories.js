const STATUS_CHECK = 'bookstore/categories/STATUS_CHECK';

// Reducer
export default function categories(state = '', action = {}) {
  switch (action.type) {
    case STATUS_CHECK:
      return 'Under construction';
    default:
      return state;
  }
}

// Action Creators

export function checkingStatus() {
  return { type: STATUS_CHECK };
}

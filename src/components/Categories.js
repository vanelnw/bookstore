import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkingStatus } from '../redux/cattegories/categories';

function Categories() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories);
  return (
    <div>
      <h1>{status}</h1>
      <button type="button" onClick={() => dispatch(checkingStatus())}>
        Check status
      </button>
    </div>
  );
}

export default Categories;

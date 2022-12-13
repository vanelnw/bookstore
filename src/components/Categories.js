import React from 'react';
import { useDispatch } from 'react-redux';
import { checkingStatus } from '../redux/cattegories/categories';

function Categories() {
  const dispatch = useDispatch();
  return (
    <div>
      <button type="button" onClick={() => dispatch(checkingStatus())}>Check status</button>
    </div>
  );
}

export default Categories;

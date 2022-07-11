import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';

function AddToCheck({ children, ...props }) {
  const dispatch = useDispatch();
  return (
    <div className="buttons mt-3 mb-1">
      <Button disabled={!props.counter} type="button" variant="outline-primary" onClick={() => dispatch(props.func)}>{children}</Button>
    </div>
  );
}

export default AddToCheck;

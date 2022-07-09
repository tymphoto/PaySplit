import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';

function MyButton({ children, ...props }) {
  return (
    <div className="buttons mt-3 mb-1">
      <Button type="button" variant="outline-primary">{children}</Button>
    </div>
  );
}

export default MyButton;

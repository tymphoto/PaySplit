import React from 'react';
import { useDispatch } from 'react-redux';
import { plusElementCount, minusElementCount } from '../../redux/actions/CheckAction';
import './CounterButton.css';

function CounterButtonForNewCheck({ setCounter, counter, el }) {
  const dispatch = useDispatch();
  return (
    <div className="buttons mt-3 mb-1 count">
      <div>
        <button type="button" disabled={!counter} onClick={() => dispatch(minusElementCount(el))} className="btn btn-outline-primary">-</button>
      </div>
      <div>{counter}</div>
      <div>
        <button type="button" onClick={() => dispatch(plusElementCount(el))} className="btn btn-outline-primary">+</button>
      </div>
    </div>
  );
}

export default CounterButtonForNewCheck;

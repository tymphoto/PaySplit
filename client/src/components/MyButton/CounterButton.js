import React from 'react';
import './CounterButton.css';

function CounterButton({ setCounter, counter }) {
  return (
    <div className="buttons mt-3 mb-1 count">
      <div>
        <button type="button" onClick={() => { if (counter > 0) setCounter(counter - 1); }} className="btn btn-outline-primary">-</button>
      </div>
      <div>{counter}</div>
      <div>
        <button type="button" onClick={() => setCounter(counter + 1)} className="btn btn-outline-primary">+</button>
      </div>
    </div>
  );
}

export default CounterButton;

import React from 'react';
import './CounterButton.css';

function CounterButtonForBill({
  setCounter, counter, el, addToSum, retracteToSum,
}) {
  return (
    <div className="buttons mt-3 mb-1 count">
      <div>
        <button type="button" disabled={!counter} onClick={() => { retracteToSum(el.price); if (counter > 0) setCounter(counter - 1); }} className="btn btn-outline-primary">-</button>
      </div>
      <div>{counter}</div>
      <div>
        <button type="button" disabled={counter === el.count} onClick={() => { addToSum(el.price); setCounter(counter + 1); }} className="btn btn-outline-primary">+</button>
      </div>
    </div>
  );
}

export default CounterButtonForBill;

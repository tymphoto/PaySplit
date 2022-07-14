import React, { useState } from 'react';
import CounterButtonForBill from '../MyButton/CounterButtonForBill';
import Products from '../Products/Products';

function CardForBill({ el, addToSum, retracteToSum }) {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <Products el={el} />
      <div className="mt-2 mb-1">
        Количество:
        {' '}
        {el.count}
      </div>
      <div className="mt-1 mb-1">
        {' '}
        Сумма:
        {' '}
        {el.price * el.count}
      </div>
      <CounterButtonForBill
        counter={counter}
        setCounter={setCounter}
        addToSum={addToSum}
        retracteToSum={retracteToSum}
        el={el}
      />
    </div>
  );
}

export default CardForBill;

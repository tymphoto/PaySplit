/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-return-assign */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import Products from '../Products/Products';
import CounterButton from '../MyButton/CounterButton';
import CardForNewCheck from '../Card/CardForNewCheck';
import CardForBill from '../Card/CardForBill';
import { getBillThunk } from '../../redux/actions/BillAction';

function Bill() {
  const dispatch = useDispatch();
  const { bill } = useSelector((state) => state);

  const [sum, setSum] = useState(0);

  useEffect(() => {
    dispatch(getBillThunk(1));
    // getSumOfCheck();
  }, []);

  const addToSum = (price) => {
    setSum((prev) => prev + +price);
  };

  const retracteToSum = (price) => {
    setSum((prev) => prev - +price);
  };

  return (
    <div>
      <ol className="menu mt-3">
        {bill.map((el) => (
          <li key={el.id}>
            <CardForBill el={el} addToSum={addToSum} retracteToSum={retracteToSum} />
          </li>
        ))}
      </ol>
      <div className="mb-5">
        Итого:
        {sum}
        ₽
      </div>
    </div>

  );
}

export default Bill;

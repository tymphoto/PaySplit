/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-return-assign */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import Products from '../Products/Products';
import CounterButton from '../MyButton/CounterButton';
import CardForNewCheck from '../Card/CardForNewCheck';

function Bill() {
  const { newCheck } = useSelector((state) => state);

  const getSumOfCheck = () => {
    let sum = 0;
    newCheck.forEach((el) => sum += Number(el.data.price) * el.count);
    return sum;
  };

  return (
    <div>
      <ol className="menu">
        {newCheck.map((el) => (
          <li>
            <CardForNewCheck el={el} />
            <div className="mt-2 mb-1">
              Количество:
              {' '}
              {el.count}
            </div>
            <div className="mt-1 mb-1">
              {' '}
              Сумма:
              {' '}
              {el.data.price * el.count}
            </div>
          </li>
        ))}
      </ol>
      <div className="mb-5">
        Итого:
        {getSumOfCheck()}
        ₽
      </div>
    </div>

  );
}

export default Bill;

/* eslint-disable no-console */
/* eslint-disable no-return-assign */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Products from '../Products/Products';
import CounterButton from '../MyButton/CounterButton';
import MyButton from '../MyButton/MyButton';
import { getCreateThunk, deleteFromCheck } from '../../redux/actions/CheckAction';
import CardForNewCheck from '../Card/CardForNewCheck';

function NewCheck() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.id);
  const check = useSelector((state) => state.newCheck);
  const prodId = check.map((el) => el.id);
  console.log(check);
  const data = { userId, prodId };

  const create = () => getCreateThunk(data);
  const { newCheck } = useSelector((state) => state);
  console.log(newCheck);
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
          </li>
        ))}
      </ol>
      {check.length > 0 && <MyButton func={create()}>Оформить заказ</MyButton>}

      <div>
        Итого:
        {getSumOfCheck()}
        ₽
      </div>
    </div>
  );
}

export default NewCheck;

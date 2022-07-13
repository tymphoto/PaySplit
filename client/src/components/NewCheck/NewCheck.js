/* eslint-disable no-return-assign */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MyButton from '../MyButton/MyButton';
import { createCheckThunk } from '../../redux/actions/CheckAction';
import CardForNewCheck from '../Card/CardForNewCheck';

function NewCheck() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.id);

  const { newCheck } = useSelector((state) => state);
  const prodId = newCheck.map((el) => el.data.id);
  console.log(newCheck);

  const data = { userId };
  const create = () => createCheckThunk({ data, newCheck });
  console.log(data, '>>>>>>>>>>>>', newCheck);
  const getSumOfCheck = () => {
    let sum = 0;
    newCheck.forEach((el) => sum += Number(el.data.price) * el.count);
    return sum;
  };

  return (
    <div>
      <ol className="menu">
        {newCheck.map((el) => (
          <li key={el.data.id}>
            <CardForNewCheck el={el} />
          </li>
        ))}
      </ol>

      <div>
        Итого:
        {getSumOfCheck()}
        ₽
      </div>
      {newCheck.length > 0 && (
      <Link to="/QR">
        <MyButton func={create()}>Оформить заказ</MyButton>
      </Link>
      )}
    </div>
  );
}

export default NewCheck;

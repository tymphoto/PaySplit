import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { putToCheck } from '../../redux/actions/CheckAction';
import { getMenuThunk } from '../../redux/actions/MenuAction';
import CounterButton from '../MyButton/CounterButton';
import MyButton from '../MyButton/MyButton';
import Products from '../Products/Products';

function Card({ el, ...props }) {
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    dispatch(getMenuThunk());
  }, []);

  return (
    <div>
      <Products el={el} />
      <CounterButton counter={counter} setCounter={setCounter} />
      <MyButton func={putToCheck(el, counter)}>Добавить в чек</MyButton>
    </div>
  );
}

export default Card;

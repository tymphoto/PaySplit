import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { putToCheck } from '../../redux/actions/CheckAction';
import { getMenuThunk } from '../../redux/actions/MenuAction';
import AddToCheck from '../MyButton/AddToCheck';
import CounterButton from '../MyButton/CounterButton';
import Products from '../Products/Products';
import './Card.css';

function Card({ el, ...props }) {
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    dispatch(getMenuThunk());
  }, []);

  return (
    <div>
      <Products el={el} />
      <AddToCheck func={putToCheck(el, counter)} counter={counter}>
        Добавить в чек
      </AddToCheck>
      <CounterButton counter={counter} setCounter={setCounter} />
    </div>
  );
}

export default Card;

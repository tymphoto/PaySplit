import React from 'react';
import { deleteFromCheck } from '../../redux/actions/CheckAction';
import CounterButtonForNewCheck from '../MyButton/CounterButtonForNewCheck';
import MyButton from '../MyButton/MyButton';
import Products from '../Products/Products';

function CardForNewCheck({ el }) {
  return (
    <div>
      <Products el={el.data} />
      <CounterButtonForNewCheck counter={el.count} el={el} />
      <MyButton func={deleteFromCheck(el)}>Удалить</MyButton>
    </div>
  );
}

export default CardForNewCheck;

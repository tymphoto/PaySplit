import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMenuThunk } from '../../redux/actions/MenuAction';
import Products from '../Products/Products';
import MyButton from '../MyButton/MyButton';
import { putToCheck } from '../../redux/actions/CheckAction';
import './Menu.css';
import CounterButton from '../MyButton/CounterButton';
import Card from '../Card/Card';

function MenuPage() {
  const { menu } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMenuThunk());
  }, []);

  return (
    <div className="prod">
      <div>
        <ol className="menu">
          {menu.map((el) => (
            <li>
              <Card el={el} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default MenuPage;

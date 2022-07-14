import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MyButton from '../MyButton/MyButton';
import { createCheckThunk } from '../../redux/actions/CheckAction';
import CardForNewCheck from '../Card/CardForNewCheck';
import './NewCheck.css';

function NewCheck() {
  const userId = useSelector((state) => state.user.id);

  const { newCheck } = useSelector((state) => state);

  const data = { userId };
  const create = () => createCheckThunk({ data, newCheck });
  const getSumOfCheck = () => {
    let sum = 0;
    newCheck.forEach((el) => {
      sum += Number(el.data.price) * el.count;
    });
    return sum;
  };

  return (
    <div>
      <ol className="newCheckList">
        {newCheck.length
          ? newCheck.map((el) => (
            <li key={el.data.id} style={{ marginLeft: '1.5rem' }}>
              <CardForNewCheck el={el} />
            </li>
          ))
          : <h2>В чек еще ничего не добавлено</h2>}
      </ol>

      {newCheck.length > 0 && (
      <div>
        Итого:
        {getSumOfCheck()}
        ₽
      </div>
      )}
      {newCheck.length > 0 && (
      <Link to="/QR">
        <MyButton func={create()}>Оформить заказ</MyButton>
      </Link>
      )}
    </div>
  );
}

export default NewCheck;

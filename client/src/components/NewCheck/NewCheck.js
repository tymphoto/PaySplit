import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Products from '../Products/Products';
import MyButton from '../MyButton/MyButton';
import { deleteFromCheck, getCheckThunk } from '../../redux/actions/CheckAction';

function NewCheck() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.id);
  const check = useSelector((state) => state.newCheck);
  const prodId = check.map((el) => el.id);
  console.log(check);
  const data = { userId, prodId };

  const create = () => getCheckThunk(data);
  const { newCheck } = useSelector((state) => state);
  return (
    <div>
      <ol className="menu">
        {newCheck.map((el) => (
          <li>
            <Products name={el.name} price={el.price} img={el.img} />
            <MyButton func={deleteFromCheck(el)}>Удалить</MyButton>
          </li>
        ))}
      </ol>
      {check.length > 0 && <MyButton func={create()}>Оформить заказ</MyButton>}

    </div>
  );
}

export default NewCheck;

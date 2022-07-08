import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Products from '../Products/Products';
import MyButton from '../MyButton/MyButton';
import { deleteFromCheck } from '../../redux/actions/CheckAction';

function NewCheck() {
  // const dispatch = useDispatch();
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

    </div>
  );
}

export default NewCheck;

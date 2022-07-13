import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import { getMenuThunk } from '../../redux/actions/MenuAction';
import Products from '../Products/Products';
import MyButton from '../MyButton/MyButton';
import { putToCheck } from '../../redux/actions/CheckAction';
import CounterButton from '../MyButton/CounterButton';
import MyCard from '../Card/MyCard';
import NewProduct from '../AddNewProduct/NewProduct';

function MenuPage() {
  const { menu } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const sortedMenu = [...menu].filter((el) => el.name.toLowerCase().includes(search.toLowerCase()));

  useEffect(() => {
    dispatch(getMenuThunk());
  }, []);

  return (
    <div className="prod">
      <NewProduct />
      {/* <MyButton func={}>Добавить блюдо</MyButton> */}
      <Form.Control className="inputSearch mt-3 mb-2" type="text" placeholder="Найти товар" value={search} onChange={(e) => setSearch(e.target.value)} />
      <div>
        <ol className="menu mt-2">
          {sortedMenu.map((el) => (
            <li>
              <MyCard el={el} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default MenuPage;

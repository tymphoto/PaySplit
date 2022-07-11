import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
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
  const [search, setSearch] = useState('');
  const sortedMenu = [...menu].filter((el) => el.name.toLowerCase().includes(search.toLowerCase()));

  useEffect(() => {
    dispatch(getMenuThunk());
  }, []);

  return (
    <div className="prod">
      <Form.Control className="inputSearch mt-3 mb-2" type="text" placeholder="Найти товар" value={search} onChange={(e) => setSearch(e.target.value)} />
      <div>
        <ol className="menu mt-2">
          {sortedMenu.map((el) => (
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

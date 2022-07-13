import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { Form, Button } from 'react-bootstrap';
import { getCategoryThunk, getMenuThunk } from '../../redux/actions/MenuAction';
import './Menu.css';
import NewProduct from '../AddNewProduct/NewProduct';
import CounterButton from '../MyButton/CounterButton';
import AddToCheck from '../MyButton/AddToCheck';
import { putToCheck } from '../../redux/actions/CheckAction';

function Category() {
  const { category } = useSelector((s) => s.menu);
  const dispatch = useDispatch();
  const { products } = useSelector((s) => s.menu);
  const [search, setSearch] = useState('');
  const [counter, setCounter] = useState(0);
  // const sortedMenu = [...products].filter((el) => el.name.toLowerCase()
  //   .includes(search.toLowerCase()));
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getMenuThunk(e.target.id));
  };

  useEffect(() => {
    dispatch(getCategoryThunk());
  }, []);

  return (
    <div className="prod">
      {category && category.map((el) => (
        <Card>
          {' '}
          <div
            className="mt-3 mb-2"
            key={el.id}
            onClick={handleSubmit}
          >
            <h3 id={el.id}>{el.name}</h3>
          </div>
        </Card>
      ))}
      <div>
        <ol className="menu mt-2">
          <Form.Control
            className="inputSearch mt-3 mb-2"
            type="text"
            placeholder="Найти товар"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <NewProduct />
          {products && products.map((el) => (
            <li>
              <Card>
                <Card.Img className="im" variant="top" src={el.img} alt="image" />
                <Card.Body>
                  <Card.Title>{el.name}</Card.Title>
                  <Card.Text>
                    {el.price}
                    {' '}
                    ₽
                  </Card.Text>
                  <AddToCheck func={putToCheck(el, counter)} counter={counter}>
                    Добавить в чек
                  </AddToCheck>
                  <CounterButton counter={counter} setCounter={setCounter} />
                </Card.Body>
              </Card>
              {' '}
            </li>
          ))}
        </ol>
      </div>

    </div>
  );
}

export default Category;

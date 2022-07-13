import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { getCategoryThunk, getMenuThunk } from '../../redux/actions/MenuAction';
import './Menu.css';
import MyCard from '../Card/MyCard';

function Category() {
  const { category } = useSelector((s) => s.menu);
  const dispatch = useDispatch();
  const { products } = useSelector((s) => s.menu);
  const [search, setSearch] = useState('');

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
            onClick={() => handleSubmit()}
          >
            <h3 id={el.id}>{el.name}</h3>
          </div>
        </Card>
      ))}
      <div>
        <ol className="menu mt-2">
          {products && products.map((el) => (
            <li>
              <div>
                <MyCard el={el} />
              </div>
            </li>
          ))}
        </ol>
      </div>

    </div>
  );
}

export default Category;

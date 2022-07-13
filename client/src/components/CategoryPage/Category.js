/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/order */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { getCategoryThunk, getMenuThunk } from '../../redux/actions/MenuAction';
import './Menu.css';

function Category() {
  const { category } = useSelector((s) => s.menu);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  // const sortedMenu = [...products].filter((el) => el.name.toLowerCase()
  //   .includes(search.toLowerCase()));
  const handleSubmit = (e) => {
    e.preventDefault();
    const { id } = e.target;
    dispatch(getMenuThunk(id));
    navigate(id);
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
            <img src={el.img} style={{ width: '200px' }} />
            <h3 id={el.id}>{el.name}</h3>
          </div>
        </Card>
      ))}

    </div>
  );
}

export default Category;

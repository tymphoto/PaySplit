import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { getCategoryThunk, getMenuThunk } from '../../redux/actions/MenuAction';
import './Menu.css';

function Category() {
  const { category } = useSelector((s) => s.menu);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        <Card className="mt-3 mb-2" onClick={handleSubmit} key={el.id}>
          {' '}
          <img src={el.img} alt="Продукт" id={el.id} style={{ height: '280px' }} />
          <h3 id={el.id}>{el.name}</h3>

        </Card>
      ))}
    </div>
  );
}

export default Category;

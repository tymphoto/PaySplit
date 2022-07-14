import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import MyCard from '../Card/MyCard';
import './Menu.css';

function CategoryProducts() {
  const { products } = useSelector((s) => s.menu);
  const location = useNavigate();

  return (
    <div>
      {products && (
      <Button type="button" variant="outline-primary" className="mt-3" style={{ maxHeight: '55px' }} onClick={() => location('/category')}>
        Вернуться назад
      </Button>
      ) }
      <div>
        <ol className="menu mt-2">
          {products && products.map((el) => (
            <li key={el.id}>
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

export default CategoryProducts;

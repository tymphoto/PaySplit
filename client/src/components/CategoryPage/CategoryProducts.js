/* eslint-disable import/order */
import React from 'react';
import { Link } from 'react-router-dom';
import MyCard from '../Card/MyCard';
import './Menu.css';
import { useSelector } from 'react-redux';

function CategoryProducts() {
  const { products } = useSelector((s) => s.menu);

  return (
    <div>
      {products && (
      <Link to="/category">
        Вернуться назад
      </Link>
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

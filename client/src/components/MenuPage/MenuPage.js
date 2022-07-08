import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMenuThunk } from '../../redux/actions/MenuAction';
import Products from '../Products/Products';
import './Menu.css';

function MenuPage() {
  const { menu } = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(menu);
  useEffect(() => {
    dispatch(getMenuThunk());
  }, []);

  return (
    <div>
      <ol className="menu" >
        {menu.map((el) => (
          <li>
            <Products name={el.name} price={el.price} img={el.img} />
          </li>
        ))}
      </ol>
    </div>

  );
}

export default MenuPage;

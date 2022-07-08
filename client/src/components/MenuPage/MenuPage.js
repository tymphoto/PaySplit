import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMenuThunk } from '../../redux/actions/MenuAction';

function MenuPage() {
  const { menu } = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(menu);
  useEffect(() => {
    dispatch(getMenuThunk());
  }, []);

  return (
    <div>
      {menu.map((el) => (
        <div>
          {el.name}
          {el.price}
          {el.img}
        </div>
      ))}

    </div>
  );
}

export default MenuPage;

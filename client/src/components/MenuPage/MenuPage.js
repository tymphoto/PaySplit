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
      <div>Product</div>
      <div>Product</div>
      <div>Product</div>
      <div>Product</div>
      <div>Product</div>
      <div>Product</div>
      <div>Product</div>
      <div>Product</div>
      <div>Product</div>
    </div>

  );
}

export default MenuPage;

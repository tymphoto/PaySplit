import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMenuReq } from '..';

function MenuPage() {
  const {  } = useSelector((state) => state);
  useEffect(() => {
    dispatch(getMenuReq(id));
  }, [id]);
  return (
    <div>

      ghdgghd

    </div>
  );
}

export default MenuPage;

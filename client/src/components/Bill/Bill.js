import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CardForBill from '../Card/CardForBill';
import { getBillThunk } from '../../redux/actions/BillAction';
import './Bill.css';

function Bill() {
  const dispatch = useDispatch();
  const { bill } = useSelector((state) => state);
  const { id } = useParams();
  console.log(id);

  const [sum, setSum] = useState(0);

  useEffect(() => {
    dispatch(getBillThunk(id));
    console.log('Some body is here');
  }, []);

  const addToSum = (price) => {
    setSum((prev) => prev + +price);
  };

  const retracteToSum = (price) => {
    setSum((prev) => prev - +price);
  };

  return (
    <div>
      <ol className="bill mt-3">
        {bill.map((el) => (
          <li key={el.id}>
            <CardForBill el={el} addToSum={addToSum} retracteToSum={retracteToSum} />
          </li>
        ))}
      </ol>
      <div className="mb-5">
        Итого:
        {sum}
        ₽
      </div>
    </div>

  );
}

export default Bill;

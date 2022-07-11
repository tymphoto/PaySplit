/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-return-assign */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import Products from '../Products/Products';

function Bill() {
  const { newCheck } = useSelector((state) => state);
  const [customers, setCustomers] = useState([]);
  const [form, setForm] = useState({});

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function addCustomer(e) {
    if (Object.keys(form).length === 0) {
      alert('Введите имя');
    } else {
      setCustomers((prev) => ([...prev, { ...form }]));
    }
  }

  const deleteCustomer = (name) => {
    setCustomers(customers.filter((customer) => customer.name !== name));
  };

  const getSumOfCheck = () => {
    let sum = 0;
    newCheck.forEach((el) => sum += Number(el.data.price) * el.count);
    return sum;
  };

  console.log('form ====>>>', form);
  console.log('customers =>>>>', customers);

  return (
    <div>
      <div className="container mb-3">
        <Form.Control className="inputSearch mt-3 mb-2" name="name" type="text" placeholder="Введите имя друзей" value={form.name || ''} onChange={handleChange} />
        <Button variant="primary" type="submit" onClick={(e) => { addCustomer(e); setForm({}); }}>
          Submit
        </Button>
      </div>

      {customers ? customers.map((el) => (
        <div className="mt-2 mb-2">
          {el.name}
          {' '}
          наел на:
          {' '}
          <Button variant="secondary" type="button" onClick={() => deleteCustomer(el.name)}>X</Button>
        </div>
      )) : ''}

      <ol className="menu">
        {newCheck.map((el) => (
          <li>
            <Products el={el.data} />
            <div className="mt-2 mb-1">
              Количество:
              {' '}
              {el.count}
            </div>
            <div className="mt-1 mb-1">
              {' '}
              Итого:
              {' '}
              {el.data.price * el.count}
            </div>

            <select
              value={customers}
              onChange={getSumOfCheck()}
            >
              <option disabled value="">Кто это ел?</option>
              {customers.map((customer) => (
                <option key={customer.name} value={customer.name}>
                  {customer.name}
                </option>
              ))}
            </select>

          </li>
        ))}
      </ol>

      <div className="mb-5">
        Итого:
        {getSumOfCheck()}
        ₽
      </div>
    </div>

  );
}

export default Bill;

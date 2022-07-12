import './NewProduct.css';
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createProdThunk } from '../../redux/actions/MenuAction';

function NewProduct() {
  const [form, setForm] = useState({ name: '', price: '', img: '' });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const newProd = () => createProdThunk({ });
  // const test = (event) => {
  //   console.log(console.log(event.target.name, event.target.price, event.target.img));
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProdThunk(form));
    setForm({});
    navigate('/');
  };
  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  // console.log(form);
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mt-3 mb-3" controlId="formBasicName">
        <Form.Label />
        <Form.Control type="text" value={form.name || ''} name="name" onChange={handleChange} placeholder="name" />
        <Form.Label />
        <Form.Control type="text" value={form.price || ''} name="price" onChange={handleChange} placeholder="price" />
        <Form.Label />
        <Form.Control type="text" value={form.img || ''} name="img" onChange={handleChange} placeholder="img.url" />
        <Button onClick={handleSubmit}> ok</Button>
      </Form.Group>
    </Form>
  );
}

export default NewProduct;

// https://hotwalls.ru/thumbnails/lg/temnyy_fon_v_melkuyu_tochku.jpg

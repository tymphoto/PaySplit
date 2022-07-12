/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
/* eslint-disable no-console */
import React, { useCallback, useRef, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createProdThunk } from '../../redux/actions/MenuAction';

function NewProduct() {
  const [inputs, setInputs] = useState({ name: '', price: '' });
  const myFile = useRef();
  const [posts, setPosts] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(createProdThunk());
  //   setForm({});
  //   navigate('/');
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', inputs.name);
    formData.append('price', inputs.price);
    formData.append('myFile', myFile.current.files[0]);

    fetch('http://localhost:3003/prodCreate', { method: 'Post', body: formData })
      .then((response) => response.json())
      .then((result) => setPosts((prev) => ([...prev, result])))
      .finally(() => setInputs({}));
  };
  // const handleInputs = (e) => {
  //   if (e.target.type === 'file') {
  //     setInputs((prev) => ({
  //       ...prev,
  //       [e.target.name]: e.target.value,
  //       file: e.target.file,
  //     }));
  //   } else setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };

  const handleInputs = useCallback((e) => {
    console.log('3222');
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mt-3 mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          value={inputs.name}
          name="name"
          onChange={handleInputs}
          placeholder="name"
          type="text"
          htmlFor="nameinput"
          id="nameinput"
        />
        <Form.Label>Price</Form.Label>
        <Form.Control
          value={inputs.price}
          name="price"
          onChange={handleInputs}
          placeholder="price"
          type="text"
          htmlFor="priceinput"
          id="priceinput"
        />
        <Form.Label>Image</Form.Label>
        <Form.Control
          type="file"
          ref={myFile}
          name="myFile"
          placeholder="image"
          id="fileInput"
          htmlFor="fileInput"
          value={inputs.myFile}
        />
        <Button type="submit"> ok</Button>
      </Form.Group>
    </Form>

  //  <Input
  //     value={inputs.myFile || ''}
  //     name="myFile"
  //     handleInputs={handleInputs}
  //     placeholder="File"
  //     type="file"
  //     htmlFor="fileInput"
  //     id="fileInput"
  //   />
  //   <button type="submit" className="btn btn-success">Success</button>
  // </form>
  );
}

export default NewProduct;

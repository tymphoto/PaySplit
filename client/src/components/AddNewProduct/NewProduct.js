import './NewProduct.css';
/* eslint-disable no-undef */
import React, {
  useCallback, useRef, useState, useEffect,
} from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getCategoryThunk } from '../../redux/actions/MenuAction';

function NewProduct() {
  const [inputs, setInputs] = useState({ name: '', price: '' });
  const myFile = useRef();
  const [posts, setPosts] = useState();
  const [categoryId, SetCatId] = useState('');
  const dispatch = useDispatch();
  const { category } = useSelector((s) => s.menu);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCategoryThunk());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', inputs.name);
    formData.append('price', inputs.price);
    formData.append('category', categoryId);
    formData.append('myFile', myFile.current.files[0]);
    console.log(formData);
    fetch('http://localhost:3003/prodCreate', { method: 'Post', body: formData })
      .then((response) => response.json())
      .then((result) => setPosts((prev) => ([...prev, result])))
      .finally(() => setInputs({}));
  };
  // const ChangeId = (e) => {
  //   SetCatId(e.target.id);
  //   console.log(catId);
  // };

  const handleInputs = useCallback((e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  // const handleCategory = (e) => {
  // };
  console.log(categoryId);

  return (
    <div className="container">
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

          <Form.Control
            aria-label="Default select example"
            as="select"
            onChange={(e) => SetCatId(e.target.value)}
          >
            <option>Select Category</option>
            {category && category.map((el) => (
              <option
                value={el.id}
              >
                {el.name}
              </option>
            ))}
          </Form.Control>

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
    </div>

  );
}

export default NewProduct;

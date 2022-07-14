import React from 'react';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import './Products.css';

function Products({ el }) {
  const dispatch = useDispatch();

  return (
    <Card>
      <Card.Img className="im" variant="top" src={el.img} alt="image" />
      <Card.Body>
        <p className="elName">{el.name}</p>
        <Card.Text>
          {el.price}
          {' '}
          ₽
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Products;

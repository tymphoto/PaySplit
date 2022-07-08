import React from 'react';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { putToCheck } from '../../redux/actions/CheckAction';
import MyButton from '../MyButton/MyButton';
import './Products.css';

function Products({ ...props }) {
  const dispatch = useDispatch();
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img className="img " variant="top" src={props.img} alt="image" />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Products;

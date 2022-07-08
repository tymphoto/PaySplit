import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Products.css';

function Products({ ...props }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img className="img " variant="top" src={props.img} alt="image" />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.price}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Products;

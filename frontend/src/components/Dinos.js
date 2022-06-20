import React from 'react';
import { Row, Col } from "react-bootstrap";



export const Dinos = (props) => {

  const { name, title, information, photo } = props;
  return (
    <Row className="mt-5">
      <Col sm={12} md={6}>
        <div className="text-center">
          <h2>{name}</h2>
          <h5><i>{title}</i></h5>
        </div>
        <p>{information}</p>

      </Col>
      <Col  sm={12} md={6}>
        <img className="d-block w-100"
          src={`http://localhost:1337${photo}`}
          alt={name} />
      </Col>
      <hr />
    </Row>
  );
};
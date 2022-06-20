import React from "react";
import { Container, Carousel, Row, Col } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import { PERIOD } from "../utils/queries";
import './Period.css';

export default function Period() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(PERIOD, {
    variables: { id: id }
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{JSON.stringify(error)}</p>;

  const periods = data.period.data.attributes;

  return (
    <Container fluid>
      <h2 className="text-center mt-3">{periods.name}</h2>
      <h6 className="text-center">{periods.doba}</h6>



      <p className="mt-4">{periods.information}</p>
      <p >{periods.climate}</p>

      <Row>
        <Col className="mt-5">
          <p>{periods.flora}</p>
        </Col>
        <Col>
          <img className="d-block plant"
            src={`http://localhost:1337${periods.picture.data.attributes.url}`}
            alt="mainPicture"
          />
        </Col>
      </Row>
      <h3 className="text-center mt-5">Dinosauři té doby</h3>
      <Carousel>
        {periods.carousel.banner.map(ban => (
          <Carousel.Item key={ban.id}>
            <a href={ban.link} target="_blank" rel="noopener noreferrer">
              <img
                className="d-block w-100 img"
                src={`http://localhost:1337${ban.photo.data.attributes.url}`}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 className="text-dark">{ban.info}</h3>
              </Carousel.Caption>
            </a>
          </Carousel.Item>
        ))
        }
      </Carousel>
    </Container>
  );
}
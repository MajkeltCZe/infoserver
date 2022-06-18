import React from "react";
import { Container } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { DINOSAURS } from "./../utils/queries";
import { Dinos } from "../components/Dinos"

export default function Records() {
  const { loading, error, data } = useQuery(DINOSAURS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{JSON.stringify(error)}</p>;
  const dinos = data.dinosaurs.data;
  return (
    <Container fluid>
      {dinos.map((dinosaur) => (

        <Dinos
          name = {dinosaur.attributes.name}
          title = {dinosaur.attributes.title}
          key={dinosaur.id}
          information =  {dinosaur.attributes.information}
          photo =    {dinosaur.attributes.photo.data.attributes.url}
/>
      

      ))}

    </Container>
  );
}

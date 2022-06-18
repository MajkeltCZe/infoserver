import React from "react";
import { Container } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { HOMEPAGE } from "./../utils/queries";


export default function Homepage() {
        const { loading, error, data } = useQuery(HOMEPAGE);
        if (loading) return <p>Loading...</p>;
        if (error) return <p>{JSON.stringify(error)}</p>;
        const homepage = data.homepage.data.attributes;

  return (
    <Container fluid>
<p className="mt-3">{homepage.about}</p>

<img
                    className="d-block w-100"
                    src={`http://localhost:1337${ homepage.picture.data.attributes.url }`}
                    alt="mainPicture"
                    />

    </Container>
  );
}

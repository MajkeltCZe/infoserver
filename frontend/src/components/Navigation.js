import React from 'react';
import { Nav, Container, Navbar, NavDropdown } from 'react-bootstrap';
import { useQuery } from "@apollo/client";
import { PERIODS } from "../utils/queries";
import './nav.css';


export const Navigation = () => {
    const { loading, error, data } = useQuery(PERIODS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{JSON.stringify(error)}</p>;
    return (
        <Navbar collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand href="/">Druhohory</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Období" id="collasible-nav-dropdown">
                            {data.periods.data.map(period => (
                                <NavDropdown.Item key={period.id} href={`/period/${period.id}`}>{period.attributes.name}</NavDropdown.Item>
                            ))}
                        </NavDropdown>
                        <Nav.Link href="/Records"
                        >Rekordy dinosaurů </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
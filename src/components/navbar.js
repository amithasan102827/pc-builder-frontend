import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link';

export const NavbarLayout = () => {
    return (
        <>
            <Navbar className='py-3' bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand >
                        <Link className='text-decoration-none text-warning fw-bold' href="/">PCBUILDER</Link>
                    </Navbar.Brand>
                    <Nav className="ms-auto">
                        {/* <Nav.Link href="#home">
                        <Link className='text-decoration-none' href="/">Home</Link>
                        </Nav.Link> */}
                        <NavDropdown className='me-4 fs-6' title="Category" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Button variant="danger">PC BUILDER</Button>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

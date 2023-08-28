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
                            <NavDropdown.Item className=' bg-dark'>
                                <Link className='text-decoration-none text-white' href='/category/CPU'>CPU</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item className=' bg-dark'>
                                <Link className='text-decoration-none text-white' href='/category/Motherboard'>Motherboard</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item className=' bg-dark'>
                                <Link className='text-decoration-none text-white' href='/category/Power Supply'>Power Supply</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item className=' bg-dark'>
                                <Link className='text-decoration-none text-white' href='/category/Storage'>Storage</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item className=' bg-dark'>
                                <Link className='text-decoration-none text-white' href='/category/RAM'>RAM</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item className=' bg-dark'>
                                <Link className='text-decoration-none text-white' href='/category/Monitor'>Monitor</Link>
                            </NavDropdown.Item>
                            
                        </NavDropdown>
                        <Link href='/pcbuilder'>
                            <Button variant="danger">
                                PC BUILDER
                            </Button>
                        </Link>
                    </Nav>
                </Container>
            </Navbar >
        </>
    )
}

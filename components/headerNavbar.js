import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import React from "react";

export default function HeaderNavbar(){

    return(
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  id="hoverText">
                <Navbar.Brand href="/movies">    </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto justify-content-center d-flex text-white table-hover">
                        <Nav.Link href="/movies">Inicio</Nav.Link>
                        <NavDropdown  title="Generos" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/adminGeders">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Peliculas" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/movies/admin-movies">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Series" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1/">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
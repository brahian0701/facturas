import React from 'react';
import { Container } from 'react-bootstrap' 
import { Navbar as Menu, Nav, NavDropdown } from 'react-bootstrap'


const Navbar = () => (
    <Menu bg="light" expand="lg" fixed="top">
        <Menu.Brand href="#home">Facturación</Menu.Brand>
        <Menu.Toggle aria-controls="basic-navbar-nav" />
        <Menu.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <NavDropdown title="Clientes" id="basic-nav-dropdown">
                <NavDropdown.Item href={'/select'}>Consultar</NavDropdown.Item>
                <NavDropdown.Item href={'/create'}>Crear</NavDropdown.Item>
                <NavDropdown.Item href={'/select'}>Eliminar</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href={'/select'}>Actualizar</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Facturas" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Crear</NavDropdown.Item>
                <NavDropdown.Item href={'/select'}>Consultar</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Pagos" id="basic-nav-dropdown">
                <NavDropdown.Item href={'/select'}>Consultar</NavDropdown.Item>
                <NavDropdown.Item href={'/create'}>Crear</NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Menu.Collapse>
    </Menu>
);


export default Navbar
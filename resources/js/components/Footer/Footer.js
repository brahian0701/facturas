import React from 'react'
import { Navbar } from 'react-bootstrap'

const Footer = () => (
    <Navbar fixed="bottom">
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                Desarrollado por Brahian Sánchez - 2020
            </Navbar.Text>
        </Navbar.Collapse>
    </Navbar>
);

export default Footer
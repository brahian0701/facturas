import React from 'react';
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import { Container, Jumbotron, Button } from 'react-bootstrap'

const Home = () => (
    <>
        <Navbar />
        <div className="p-5" />
        <Container>
            <Jumbotron>
                <h1>Bienvenido a la Facturación</h1>
                <hr />
                <p>
                    Para continuar por favor selecciona la accion que deseas realizar en el menu
                    de la parte superior.
                </p>
            </Jumbotron>
        </Container>
        <Footer />
    </>
);

export default Home
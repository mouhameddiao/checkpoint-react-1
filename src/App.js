// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';



const App = () => {
  return (
    <Container className="d-flex flex-column align-items-center">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.zdnet.com/a/img/resize/9c4c6a4546bf9e283e63548c45f588360ce02607/2023/10/05/487a7516-8c27-4547-9dd5-e78f40e8d112/google-pixel-8-pro-screen.jpg?auto=webp&fit=crop&height=900&width=1200" />
      <Card.Body>
        <Card.Title>SMARTPHONE</Card.Title>
        <Card.Text>
        Un smartphone de dernière génération avec toutes les fonctionnalités modernes.
        </Card.Text>
        <Button variant="primary">ACHETEZ</Button>
      </Card.Body>
    </Card>
    </Container>
  );
}

export default App;

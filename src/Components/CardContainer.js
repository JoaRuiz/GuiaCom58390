import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CardP from './Card';

const CardContainer = () => {
  const [personaje, setPersonaje] = useState([]);

  useEffect(() => {
    const getPersonajes = async () => {
      try {
        const response = await fetch(
          'https://rickandmortyapi.com/api/character'
        );
        if (response.ok) {
          const data = await response.json();
          setPersonaje(data.results);
        } else {
          console.error('Error al cargar personajes');
        }
      } catch (error) {
        console.error('Error al cargar personajes', error);
      }
    };
    getPersonajes();
  }, []);

  return (
    <div>
    <Container fluid>
      <Row>
        {personaje ? (personaje.map((p) => <CardP key={p.id} character={p} />)
        ) : (
          <p>Cargando personajes...</p>
        )}
      </Row>
    </Container>
    </div>
  );
};

export default CardContainer;

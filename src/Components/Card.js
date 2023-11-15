import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './Card.css';
import CardDetail from '../Components/CardDetail'; 

function CardP({ character }) {
  const [showDetail, setShowDetail] = useState(false);

  const openDetail = () => {
    setShowDetail(true);
  };

  const closeDetail = () => {
    setShowDetail(false);
  };

  return (
    <Col lg={4}>
      <Card className="glowing-card" onClick={openDetail}>
        <div className="image-container">
          <Card.Img
            variant="top"
            src={character.image}
            className="card-image"
          />
        </div>
        <Card.Body>
          <Card.Title className="glowing-text">{character.name}</Card.Title>
          <Card.Text className="glowing-text">
            Haz click para ver mas info
          </Card.Text>
          <Button variant="success">💗 Click </Button>
        </Card.Body>
      </Card>
      {showDetail && <CardDetail character={character} onClose={closeDetail} />}
    </Col>
  );
}

export default CardP;

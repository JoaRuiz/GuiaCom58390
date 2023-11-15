import React from 'react';

function CardDetail({ character, onClose }) {
  return (
    <div className="character-detail">
      <h2>Detalle del Personaje</h2>
      <img src={character.image} alt={character.name} />
      <p>
        <strong>Nombre:</strong> {character.name}
      </p>
      <p>
        <strong>Descripción:</strong> {character.species} - {character.gender} - {character.location.name}
      
      </p>
      <button onClick={onClose}>Cerrar</button>
    </div>
  );
}

export default CardDetail;

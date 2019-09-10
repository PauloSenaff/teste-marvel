import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { StyledDetails } from './details.style';
import { Link } from 'react-router-dom';

const Details = ({ characters, location }) => {
  const id = location.state && location.state.id;
  const character = characters.find(character => character.id === id);

  if (!character) {
    return <Redirect to="/" />;
  }

  const { name, description, thumbnail, series } = character;

  return (
    <StyledDetails>
      <h1>{name}</h1>
      <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={`${name} thumbnail`} />
      <h4>Full description:</h4>
      <p>{description}</p>
      <h4>Series List:</h4>
      <ul>
        {series.items.map(serie => (
          <li key={serie.resourceURI}>{serie.name}</li>
        ))}
      </ul>
      <Link to={{pathname: '/',}}> Voltar a página anterior </Link>
    </StyledDetails>
  );
};

const mapStateToProps = ({ characterState }) => ({
  characters: characterState.characters
});

export default connect(mapStateToProps)(withRouter(Details));

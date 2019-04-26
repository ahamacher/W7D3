import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = props => {
  // debugger
  return(
    <li><Link to={`/pokemon/${props.pokemon.id}`} ><img src={props.pokemon.image_url} className="resize" /> {props.pokemon.name}</Link></li>
  )
}

export default PokemonIndexItem;
import React from 'react';
import PokemonIndexItem from './pokemon_index_item'
import {Route} from 'react-router-dom';
import PokemonDetailContainer from './pokemon_detail_container';

class PokemonIndex extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.requestAllPokemon();
  }

  render(){
    const pkmn = this.props.pokemon;
    const pokemonItems = pkmn.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke} />);
    
    return(
      <>
        <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} /> 
        <ul>
          {pokemonItems}
        </ul>
      </>
    );
  }
}

export default PokemonIndex;
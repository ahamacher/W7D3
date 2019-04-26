import { connect } from 'react-redux';
import { requestOnePokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';


const mapStateToProps = (state, ownProps) => {
  // piece of state that container subscribes to
  const pokemon = state.entities.pokemon[ownProps.match.params.pokemonId];
  debugger
  return {
    pokemon: pokemon,
    items: pokemon.items
  }
};

const mapDispatchToProps = dispatch => {
  // debugger
  return ({
    requestOnePokemon: (id) => dispatch(requestOnePokemon(id))
  })
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
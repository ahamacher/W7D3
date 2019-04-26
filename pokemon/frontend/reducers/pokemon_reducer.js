import { RECEIVE_ALL_POKEMON, RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) =>{
  Object.freeze(state);
    let nextState;
    switch (action.type) {
      case RECEIVE_ALL_POKEMON:
        // debugger
        nextState = Object.assign({}, action.pokemon);
        return nextState;
      case RECEIVE_ONE_POKEMON:
        nextState = Object.assign({}, state, {[action.pokemon.id]: action.pokemon});
        return nextState;
      default:
        return state;
    }
};

export default pokemonReducer;
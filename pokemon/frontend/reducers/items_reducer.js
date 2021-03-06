import { RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';

const itemReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;
  switch (action.type) {
    case RECEIVE_ONE_POKEMON:
      nextState = Object.assign({}, state, action.pokemon.items);
      return nextState;
    default:
      return state;
  }
};

export default itemReducer;
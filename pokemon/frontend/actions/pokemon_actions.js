import * as APIUtil from '../util/api_util'

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_ONE_POKEMON = 'RECEIVE_ONE_POKEMON';

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
})

export const receiveOnePokemon = pokemon => ({
  type: RECEIVE_ONE_POKEMON,
  pokemon
})

export const requestOnePokemon = (id) => (dispatch) => (
  APIUtil.fetchOnePokemon(id)
    .then(poke => dispatch(receiveOnePokemon(poke)))
)

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)


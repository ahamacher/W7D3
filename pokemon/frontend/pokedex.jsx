import React from 'react';
import ReactDOM from 'react-dom';
import { receiveAllPokemon, requestAllPokemon, requestOnePokemon } from './actions/pokemon_actions';
import { fetchAllPokemon } from './util/api_util';
import pokemonReducer from './reducers/pokemon_reducer'
import configureStore from './store/store';
import { selectAllPokemon } from './reducers/selectors'
import Root from './components/root';
import {HashRouter, Route} from 'react-router-dom';


document.addEventListener('DOMContentLoaded', () =>{

  const rootEl = document.getElementById('root')
  const store = configureStore();
  //testonly
  window.requestAllPokemon = requestAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  window.requestOnePokemon = requestOnePokemon;
  window.fetchAllPokemon = fetchAllPokemon;
  window.pokemonReducer = pokemonReducer;
  window.getState = store.getState; 
  window.dispatch = store.dispatch
  window.selectAllPokemon = selectAllPokemon

  ReactDOM.render(<Root store={store} />, rootEl)
})
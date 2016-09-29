import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { pokemonReducer } from '../reducers/pokemon_reducer';
import PokemonMiddleware from '../middleware/pokemon_middleware';


export const configureStore = () => (
  createStore(
    pokemonReducer,
    applyMiddleware(PokemonMiddleware)
  )
);

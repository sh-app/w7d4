import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

export const pokemonReducer = (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return merge({}, {pokemon: action.pokemon});
    case RECEIVE_POKEMON:
        let newState = {};
        merge(newState, state, {current_pokemon: action.pokemon});
        return newState;
    default:
      return state;

  }
};

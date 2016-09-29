import { receiveAllPokemon, REQUEST_ALL_POKEMON,
  receivePokemon, REQUEST_POKEMON} from '../actions/pokemon_actions';
import { fetchAllPokemon, fetchPokemon } from '../util/api_util';



export default ({ dispatch }) => next => action => {
  let fetchSuccess;
  switch(action.type){
    case REQUEST_ALL_POKEMON:
      fetchSuccess = pokemon => store.dispatch(receiveAllPokemon(pokemon));
      fetchAllPokemon(fetchSuccess);
    case REQUEST_POKEMON:
      fetchSuccess = pokemon => {
        store.dispatch(receivePokemon(pokemon))};
      fetchPokemon(fetchSuccess, action.id);
    default:
     return next(action);
  }
};

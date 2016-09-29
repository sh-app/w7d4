import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store/store';
import PokemonIndexContainer from './components/pokemon/pokemon_index_container';
import { Router, Route, hashHistory } from 'react-router';
import { requestPokemon, receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions.js';
import PokemonDetail from './components/pokemon/pokemon_detail';

let store = configureStore();

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/"
        component={PokemonIndexContainer}
        onEnter={() => store.dispatch(requestAllPokemon())}>
          <Route path=":id"
            component={PokemonDetail}
            onEnter={(nextState) => store.dispatch(requestPokemon(nextState.params.id))}/>
      </Route>
    </Router>
  </Provider>
);

document.addEventListener('DOMContentLoaded', () =>{
  window.store = store;
  ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
});

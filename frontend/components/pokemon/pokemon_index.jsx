import React from 'react';
import { allPokemon } from '../../reducers/selector';
import PokemonIndexItem from './pokemon_index_item';

export default class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const pokemonItems = allPokemon(this.props.pokemon).map((pokemon) => (
      <PokemonIndexItem key={pokemon.id} pokemon={pokemon} />
    ));

    return (
      <section className="pokedex">
        <ul>
          {pokemonItems}
        </ul>
        {this.props.children}
      </section>
    );
  }
}

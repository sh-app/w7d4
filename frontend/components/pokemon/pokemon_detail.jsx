import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { requestPokemon } from '../../actions/pokemon_actions';
import { allToys } from '../../reducers/selector';

class PokemonDetail extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    const url = `/${this.props.current_pokemon.id}/toys/${id}`;
    this.props.router.push(url);

  }

  render(){
    if (this.props.current_pokemon){
      let moves = this.props.current_pokemon.moves.map( (move, idx)=> {
        return (<li key={idx}>{move}</li>);
      });
      let toys = allToys(this.props.current_pokemon.toys).map( (toy, idx)=> {
        return (<li onClick = {this.handleClick.bind(null, toy.id)} ey={idx}>{toy.name}</li>);
      });
      return(
        <section className="pokemon-detail">
          <ul>
            <img src={this.props.current_pokemon.image_url} alt=""/>
              <li><h2>{this.props.current_pokemon.name}</h2></li>
              <li>Type: {this.props.current_pokemon.poke_type}</li>
              <li>Attack: {this.props.current_pokemon.attack}</li>
              <li>Defense: {this.props.current_pokemon.defense}</li>
              <li>Moves: <ul>{moves}</ul></li>
            <section className="toys">
                <h3>Toys</h3>
              <ul className="toy-list">
                {toys}
              </ul>
            </section>
          </ul>
        </section>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state) => ({
  current_pokemon: state.current_pokemon
});

const PokemonDetailContainer = connect(
  mapStateToProps,
  null)(withRouter(PokemonDetail));

export default PokemonDetailContainer;

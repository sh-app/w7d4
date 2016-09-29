import { connect } from 'react-redux';
import { receiveAllPokemon, requestAllPokemon } from '../../actions/pokemon_actions.js';
import PokemonIndex from './pokemon_index';

const mapStateToProps = ({ pokemon }) => ({
  pokemon
});

const mapDispatchToProps = dispatch => ({
  requestAllPokemon: () => dispatch(requestAllPokemon())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonIndex);

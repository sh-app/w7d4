import React from 'react';
import { withRouter } from 'react-router';

export default withRouter(
  class PokemonIndexItem extends React.Component{
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      let url = this.props.pokemon.id;
      let router = this.props.router;
      router.push(`/${url}`);
    }

    render() {
      let url = this.props.pokemon.image_url;
      return(
        <li className="pokemon-index-item" onClick={this.handleClick}>
          <img src={url}/>
          {this.props.pokemon.name}
        </li>
      );
    }


});

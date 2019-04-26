import React from 'react';

// pokemon picture, name stats etc
class PokemonDetail extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.requestOnePokemon(this.props.match.params.pokemonId);
  }

  render () {
    const pkmn = this.props.pokemon;
    const itemz = this.props.items;
    if (!pkmn) { return null; }
    return (
      <div>
        <img src={pkmn.image_url} />
        {pkmn.name}
        {pkmn.moves}
        <ul>
          { itemz.map((item) => <li>{item.name}</li>)}
        </ul>
      </div>
    )
  }


}
  

export default PokemonDetail;

// pokemon items
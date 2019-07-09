import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {


  render() {

    const allPokemon = this.props.pokemon.map(pokemon => <PokemonCard pokemon={pokemon} />)

    return (
      <Card.Group itemsPerRow={6}>
        {allPokemon}
      </Card.Group>
    )
  }
}

export default PokemonCollection

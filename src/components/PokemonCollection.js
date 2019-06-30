import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  render() {

    const allPokemon = this.props.pokemonsData.map(pokemon => {
      debugger
      return <PokemonCard pokemonData={pokemon}/>
    })

    return (
      <Card.Group itemsPerRow={6}>
        <h1>Pokemon Collection</h1>
          {allPokemon}
      </Card.Group>
    )
  }
}

export default PokemonCollection

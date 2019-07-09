import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state ={
    pokemon: [],
  }


  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(response => response.json())
      .then(pokemonData => this.setState({
        pokemon: pokemonData
      }))
  }

  addNewPokemon = (newPokemon) => {
    this.setState({
      pokemon: [...this.state.pokemon, newPokemon]
    })
  }


  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(() => console.log('🤔'), 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemon={this.state.pokemon}/>
        <br />
        <PokemonForm addNewPokemon={this.addNewPokemon}/>
      </div>
    )
  }
}

export default PokemonPage

import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'
import { format } from 'url';

class PokemonPage extends React.Component {

  state = {
    shownPokemon: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(resp => resp.json())
      .then(pokemons => {
        this.setState({ shownPokemon: pokemons })
      })
  }

  handleSearchChange = (data) => {
    fetch('http://localhost:3000/pokemon')
      .then(resp => resp.json())
      .then(pokemons => {
        const filteredPokemon = pokemons.filter(pokemon => pokemon.name.includes(data))
        this.setState({ shownPokemon: filteredPokemon })
      })
  }

  handleSubmit = (name, hp, front, back) => {

    const newPokemon = {
      name: name, 
      stats: [
        {
          name: "hp",
          value: hp
        }
      ],
      sprites: {
        front: front,
        back: back
      }
    }
    
    this.setState({
      shownPokemon:[newPokemon, ...this.state.shownPokemon]
    })
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce((e, data) => this.handleSearchChange(data.value), 500)} showNoResults={true} />
        <br />
        <PokemonCollection pokemonsData={this.state.shownPokemon} />
        <br />
        <PokemonForm onSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default PokemonPage

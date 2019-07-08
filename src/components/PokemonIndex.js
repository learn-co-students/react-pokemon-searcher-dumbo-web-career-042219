import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'
import Sort from './Sort'

class PokemonPage extends React.Component {
  state = {
    pokemonList: [],
    unfilteredPokemonList: [],
    searchTerm: "",
    sortedList: []
  }

//-------------------FETCH POKEMON LIST-----------------------------

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
    .then(res => res.json())
    .then(data => {
      this.setState({pokemonList: data})
      this.setState({unfilteredPokemonList: data})

    })
  }


//---------------------------------POKEMON SEARCH------------------------
  handleSearch = (event, data) => {
    this.setState({searchTerm: data.value})
    this.setState({
      pokemonList: [...this.state.unfilteredPokemonList]
    })

    let allPokemon = [...this.state.pokemonList]

    let filteredPokemon = allPokemon.filter(pokemon => pokemon.name.includes(this.state.searchTerm)
  )
  this.setState({pokemonList: filteredPokemon})
}


  handleSort = (sortValue) => {
    console.log(sortValue);
    let list = [...this.state.pokemonList]

    if (sortValue==="Alphabetically") {
      const sorted = list.sort((a, b) => {
        return a.name.localeCompare(b.name)
      })

    this.setState({pokemonList: sorted})

  } else if (sortValue==="Weight") {
    const weightSorted = list.sort((a, b) => {
      return a.weight > b.weight ? 1 : -1
      // return a.weight.localeCompare(b.weight)
      // console.log(a.weight + "---- " + b.weight);
      // return a.weight.localeCompare(b.weight)

    })


    this.setState({pokemonList: weightSorted})
  }

}






  render() {

    // console.log(this.state.pokemonList)
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.handleSearch, 500)} />
        <br />
        <Sort sort={this.handleSort} />
        <br />
        <PokemonCollection
          pokemonList={this.state.pokemonList}
          />
        <br />
        <PokemonForm />
      </div>
    )
  }
}

export default PokemonPage

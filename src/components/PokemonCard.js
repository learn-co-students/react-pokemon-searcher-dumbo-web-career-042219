import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    backSide: false,
    url: ""
  }

  handleClick =(event) => {
    this.setState({backSide: !this.state.backSide})


    if (this.state.backSide) {
      this.setState({url: this.props.pokemon.sprites.back})
    }
    else{
      this.setState({url: this.props.pokemon.sprites.front})
    }
  }

  render() {


    return (
      <Card onClick={this.handleClick}>
        <div  >
          <div className="image">
            <img name={this.props.pokemon.name} src={this.state.url ? this.state.url : this.props.pokemon.sprites.front} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              Abilities: {this.props.pokemon.abilities.join(", ")} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard

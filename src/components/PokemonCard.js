import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    click: false
  }

  handleClick = () => {
    this.setState({
      click: !this.state.click
    })
  }

  render() {

    const displayImage = 
      (this.state.click === false) 
      ? this.props.pokemon.sprites.front 
      : this.props.pokemon.sprites.back
    

    return (
      <Card>
        <div>
          <div className="image">
            <img src={displayImage} alt="oh no!" onClick={this.handleClick}/>
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              POKEMON HP HERE hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard

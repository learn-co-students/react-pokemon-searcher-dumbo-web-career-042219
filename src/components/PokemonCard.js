import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    imgFront: true
  }

  handleOnClick = () => {
    this.setState({
      imgFront: !this.state.imgFront
    })
  }

  componentDidUpdate(prevProps) {
    if (this.props.pokemonData !== prevProps.pokemonData) {
      this.setState({imgFront:true});
    }
  }

  render() {
    const getHpValue = this.props.pokemonData.stats.find(stat => stat.name === "hp").value
    const getName = this.props.pokemonData.name.slice(0,1).toUpperCase() + this.props.pokemonData.name.slice(1)
    const getImg = this.state.imgFront ? this.props.pokemonData.sprites.front:this.props.pokemonData.sprites.back

    return (
      <Card>
        <div>
          <div className="image">
            <img src={getImg} onClick={this.handleOnClick} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{getName}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {getHpValue}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard

import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      sprites: {
      front: '',
      back: ''
    }
  }
  }

  handleChange = (event) => {
     this.setState({
      [event.target.name]: event.target.value
    })
  }

//   handleSubmit = (event) => {

//     event.preventDefault();
//     fetch('http://localhost:3000/pokemon', {
//       method: 'POST',
//       headers: {
//         'Content-Type':'application/json',
//         'Accept': 'application/json'
//       },
//       body: JSON.stringify({
//       "name": this.state.name,
//       "hp": this.state.hp,
//       "frontUrl": this.state.frontUrl,
//       "backUrl": this.state.backUrl
//    })
//   });
//  };

handleSubmit = () => {
  this.props.addNewPokemon(this.state)
}


  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.handleChange} value={this.state.name}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.handleChange} value={this.state.hp}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.handleChange} value={this.state.sprites.front}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.handleChange} value={this.state.sprites.back}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
     )
    }
  }


export default PokemonForm

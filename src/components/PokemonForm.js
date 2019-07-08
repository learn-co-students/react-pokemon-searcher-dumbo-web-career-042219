import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      weight: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  //--------------------------------------Handle submit form------------

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onNewPokemon(this.state)
  }

  //--------------------------------------Handle changes to the input fields

  handleNameChange = (event, data) => {
    this.setState({name: data.value})
  }

  handleWeightChange = (event, data) => {
    this.setState({weight: data.value})
  }

  handleFrontChange = (event, data) => {
    this.setState({frontUrl: data.value})
  }

  handleBackChange = (event, data) => {
    this.setState({backUrl: data.value})
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input onChange={this.handleNameChange} value={this.state.name} fluid label="Name" placeholder="Name" name="name" />
            <Form.Input onChange={this.handleWeightChange} value={this.state.weight} fluid label="weight" placeholder="weight" name="weight" />
            <Form.Input onChange={this.handleFrontChange} value={this.state.frontUrl} fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input onChange={this.handleBackChange} value={this.state.backUrl} fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm

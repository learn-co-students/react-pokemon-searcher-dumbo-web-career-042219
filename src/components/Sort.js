import React from 'react'


class Sort extends React.Component {

  handleChange = (event) => {
    this.props.sort(event.target.value)
  }

  render() {


    return (<div>
      <strong>Sort by:</strong>
      <label>
        <input type="checkbox" value="Alphabetically" checked={null} onChange={this.handleChange}/>
        Alphabetically
      </label>
      <label>
        <input type="checkbox" value="Weight" checked={null} onChange={this.handleChange}/>
        Weight
      </label>
      <br/>

</div>);
  }
}

export default Sort

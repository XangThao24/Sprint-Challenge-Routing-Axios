import React, { Component } from 'react';
import axios from "axios";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    let newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    axios.post("http://localhost:3333/smurfs", newSmurf)
      .then(response => {
        this.props.refresh();
        this.setState({
          name: "",
          age: "",
          height: ""
        })})
      .catch(err => console.log(err));
  }

  handleInputChange(e){
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange.bind(this)}
            placeholder="name"
            value={this.state.name}
            name="name"
            type="text"
            required
          />
          <input
            onChange={this.handleInputChange.bind(this)}
            placeholder="age"
            value={this.state.age}
            name="age"
            type="text"
            required
          />
          <input
            onChange={this.handleInputChange.bind(this)}
            placeholder="height"
            value={this.state.height}
            name="height"
            type="text"
            required
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;

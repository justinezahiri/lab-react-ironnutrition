import React, { Component } from 'react';

class AddFood extends Component {

  constructor(props){
      super(props);

      this.state = { 
        name: '',
        calories: 0,
        image: ''
      }
  }
  
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.addTheFood(this.state);
    this.setState({     
      name: '',
      calories: 0,
      image: ''
    })     
  }

  handleChange(event) {
    let { name, value } = event.target;
    this.setState({[name]: value});
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>

            <label>Name:</label>
            <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />
            <label>Calories:</label>
            <input type="number" name="calories" value={this.state.calories} onChange={(e) => this.handleChange(e)} />
            <label>Image</label>
            <input type="image" name="image" value={this.state.image} onChange={(e) => this.handleChange(e)} />
            <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default AddFood;
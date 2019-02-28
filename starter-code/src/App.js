import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './FoodBox';

class App extends Component {

  state = {
    foodsArray : foods
  };
  render() {
    return (
      <div className="App">
        {this.state.foodsArray.map((food, index) =>  {
          return (<FoodBox key={index} food = {food} />)    

        }
        )}}
      </div>
    );
  }
}

export default App;

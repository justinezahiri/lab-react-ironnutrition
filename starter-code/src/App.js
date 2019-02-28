import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './FoodBox';
import AddFood from './AddFood';

class App extends Component {

  state = {
    foodsArray : foods,
    showForm : false

  };

  addFood = (food) => {
    const newFoodsArray = [...this.state.foodsArray];
    newFoodsArray.push(food);
    this.setState({foodsArray : newFoodsArray})

  }

  render() {
    return (
      <div className="App">



        {this.state.showForm ? <AddFood addTheFood={this.addFood}/>
          :
        <button onClick={() => this.setState({showForm : true}) }>Add Food</button>
        }



        {this.state.foodsArray.map((food, index) =>  {
          return (<FoodBox key={index} food={food} />)    

        }
        )}}
      </div>
    );
  }
}

export default App;

import React from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json'

class FoodBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foodArray: foods.slice(0, 5)
    };
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

render() {
  return(
    <div className="FoodBox">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src="https://i.imgur.com/eTmWoAN.png" alt="food"/>
          </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{this.state.foodArray.name}</strong> <br />
          <small>{this.state.foodArray.calories}</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input
            className="input"
            type="number" 
            value="1"
            onChange={this.handleChange}
          />
        </div>
        <div className="control">
          <button className="button is-info">+</button>
        </div>
      </div>
    </div>
  </article>
</div>
  )
}
}

export default FoodBox;
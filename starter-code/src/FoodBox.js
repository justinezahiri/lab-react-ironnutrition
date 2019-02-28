import React from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json'

class FoodBox extends React.Component {
  constructor(props) {
    super(props);
  }

render() {
  return(
    <div className="FoodBox">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={this.props.food.image} alt="food"/>
          </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{this.props.food.name}</strong> <br />
          <small>{this.props.food.calories}</small>
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
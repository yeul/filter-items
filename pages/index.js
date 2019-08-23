import React, { Fragment } from "react";
import { foods } from "../data/data";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filter: foods, clicked: false };
    this.buttonClicked = this.buttonClicked.bind(this);
    this.filteredList = this.filteredList.bind(this);
  }

  /**
   *
   * @description
   * Filters the "foods" array by comparing the food type against the value of the clicked button.
   * Then takes that filtered array and sets it to state.
   */
  buttonClicked(e) {
    console.log(e.target.value);
    console.log(foods.filter(food => food.type === e.target.value));
    this.setState({ filter: foods.filter(food => food.type === e.target.value) });
  }

  /**
   *
   * @description
   * Maps over the array on the state and returns DIVs with the food.name
   */
  filteredList() {
    return this.state.filter.map(food => <div key={food.id}>{food.name}</div>);
  }

  /**
   *
   * @description
   * The idea of this is for you to be able to click on a button,
   * send the value into buttonClicked, then filter the foods based
   * off of the value. Next in buttonClicked is to set the filtered
   * array of foods to the state.
   *
   * filteredList maps over the state.filter array of foods and returns
   * them as DIVs with the food.name in it.
   */
  render() {
    console.log(this.state);
    return (
      <Fragment>
        <button value='fruit' className='btn-primary fruits' onClick={e => this.buttonClicked(e)}>
          Froots
        </button>
        <button value='vegetable' className='btn-primary fruits' onClick={e => this.buttonClicked(e)}>
          Vergtables
        </button>
        {this.filteredList()}
      </Fragment>
    );
  }
}

export default App;

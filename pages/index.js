import React, { Fragment } from "react";
import { foods } from "../data/data";
import "../styles/main.scss";

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
   * Maps over the array on the state and returns LIs with the food.name
   */
  filteredList() {
    return this.state.filter.map(food => (
      <li key={food.id} className='games-li'>
        {food.name}
      </li>
    ));
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
   * them as LIs with the food.name in it.
   */
  render() {
    console.log(this.state);
    return (
      <Fragment>
        <div className='outer-container container-fluid'>
          <div className='inner-container container-fluid'>
            <div className='sidebar-container'>
              <div className='sidebar-btn-row row no-gutters'>
                <div className='col-lg-12'>
                  <button value='fruit' className='filter-btn fruits' onClick={e => this.buttonClicked(e)}>
                    Froots
                  </button>
                </div>
              </div>
              <div className='sidebar-btn-row row no-gutters'>
                <div className='col-lg-12'>
                  <button value='vegetable' className='filter-btn fruits' onClick={e => this.buttonClicked(e)}>
                    Vergtables
                  </button>
                </div>
              </div>
            </div>
            <div className='games-content-row row no-gutters'>
              <div className='games-content-col col-lg-12'>
                <ul className='games-ul'>{this.filteredList()}</ul>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;

import React, { Fragment } from "react";
import { games } from "../data/games";
import Card from "../components/Card";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filter: games, clicked: false };
    this.buttonClicked = this.buttonClicked.bind(this);
    this.filteredList = this.filteredList.bind(this);
  }

  /**
   *
   * @description
   * Filters the "games" array by comparing the game genre against the value of the clicked button.
   * Then takes that filtered array and sets it to state.
   * If the value of the button is "show all", it will return all of the game items.
   */
  buttonClicked(e) {
    console.log(e.target.value);
    console.log(games.filter(game => game.genre === e.target.value));
    if (e.target.value === "show-all") {
      this.setState({ filter: games });
    } else {
      this.setState({ filter: games.filter(game => game.genre === e.target.value) });
    }
  }

  /**
   *
   * @description
   * Maps over the array on the state and returns Card component with the game.image.
   */
  filteredList() {
    return this.state.filter.map(game => <Card className='games-li' gameImage={game.image} />);
  }

  /**
   *
   * @description
   * The idea of this is for you to be able to click on a button,
   * send the value into buttonClicked, then filter the games based
   * off of the value. Next in buttonClicked is to set the filtered
   * array of games to the state.
   *
   * filteredList maps over the state.filter array of games and returns
   * them as Card components with the game.image in it.
   */
  render() {
    console.log(this.state);
    return (
      <Fragment>
        <div className='outer-container container-fluid'>
          <div className='inner-container container-fluid'>
            <div className='inner-container-row row no-gutters'>
              <div className='inner-container-col col-lg-12'>
                <div className='inner-container-row row no-gutters'>
                  <div className='sidebar-col col-lg-3'>
                    <div className='row no-gutters'>
                      <div className='col-lg-12'>
                        <h1 className='site-name-header'>Gamepack</h1>
                      </div>
                    </div>
                    <div className='sidebar-btn-row row no-gutters'>
                      <div className='col-lg-12'>
                        <button value='Action-Adventure' className='filter-btn' onClick={e => this.buttonClicked(e)}>
                          Action-Adventure
                        </button>
                      </div>
                    </div>

                    <div className='sidebar-btn-row row no-gutters'>
                      <div className='col-lg-12'>
                        <button value='Puzzle' className='filter-btn' onClick={e => this.buttonClicked(e)}>
                          Puzzle
                        </button>
                      </div>
                    </div>
                    <div className='sidebar-btn-row row no-gutters'>
                      <div className='col-lg-12'>
                        <button value='Racing' className='filter-btn' onClick={e => this.buttonClicked(e)}>
                          Racing
                        </button>
                      </div>
                    </div>
                    <div className='sidebar-btn-row row no-gutters'>
                      <div className='col-lg-12'>
                        <button value='RPG' className='filter-btn' onClick={e => this.buttonClicked(e)}>
                          RPG
                        </button>
                      </div>
                    </div>
                    <div className='sidebar-btn-row row no-gutters'>
                      <div className='col-lg-12'>
                        <button value='Simulation' className='filter-btn' onClick={e => this.buttonClicked(e)}>
                          Simulation
                        </button>
                      </div>
                    </div>
                    <div className='sidebar-btn-row row no-gutters'>
                      <div className='col-lg-12'>
                        <button value='Survival' className='filter-btn' onClick={e => this.buttonClicked(e)}>
                          Survival
                        </button>
                      </div>
                    </div>
                    <div className='sidebar-btn-row row no-gutters'>
                      <div className='col-lg-12'>
                        <button value='show-all' className='filter-btn' onClick={e => this.buttonClicked(e)}>
                          Show All
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='games-container-col col-lg-9'>
                    <div className='games-content-row row no-gutters'>{this.filteredList()}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;

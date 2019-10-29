import React, { Fragment } from "react";

class Card extends React.Component {
  render() {
    return (
      <Fragment>
        <div className='games-content-row row no-gutters'>
          <div className='games-content-col col-lg-3'>
            <div className='game-card'>
              {/* <ul className='games-ul'>{this.filteredList()}</ul> */}
              <Card />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

// export default Card;

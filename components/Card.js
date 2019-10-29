import React, { Fragment } from "react";
import "../styles/main.scss";

const Card = props => {
  return (
    <Fragment>
      <div className='game-card-div'>
        <div className='game-card'>
          {props.gameName}
          {/* <img className='gameImageSize' src={props.gameImage} /> */}
        </div>
      </div>
    </Fragment>
  );
};

export default Card;

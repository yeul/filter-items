import React, { Fragment } from "react";
import "../styles/main.scss";

const Card = props => {
  return (
    <Fragment>
      <div className='game-card-div'>
        <div className='game-card' style={{ backgroundImage: `url('${props.gameImage}')`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "50%" }}>
          {/* {props.gameName} */}
          {/* <img className='gameImageSize' src={props.gameImage} /> */}
        </div>
      </div>
    </Fragment>
  );
};

export default Card;

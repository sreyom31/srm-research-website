import React from 'react';
import './flip.css';

function flipcardComittee(props) {
  return (
    <div id="section-plans">
      <div className="card">
        <div className="card__side card__side--front-1">
          <img className="image" src={props.image} alt="" />
          <h1 className="name">{props.name}</h1>
        </div>
        <div className="card__side card__side--back card__side--back-1">
          <h1 className="nameBack">{props.name}</h1>
          <h1 className="desig">{props.desig}</h1>
        </div>
      </div>
    </div>
  );
}

export default flipcardComittee;

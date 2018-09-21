import React from 'react';

import './Card.css';
import Logo from '../../../assets/word.png'

const Card = (props) => {
  return(
    <div className="card-grid">
      <div className="card-first-row">
        <div className="card-upper">
          <span className="card-title">{props.title[1]} {props.class[1]}</span>
          <span className="card-id">ID:{props.id}</span>
        </div>
        <div className="card-lower">
          <span className="card-status">Статус:</span>
          <span className="card-last-status">{props.status}</span>
        </div>
      </div>
      <div className="card-second-row">Урок № {props.number} - {props.theme}</div>
      <div className="card-download">
        <img className="card-logo" src={Logo} alt="" />
        <a>{props.filename}</a>
      </div>
    </div>
  )
}

export default Card;
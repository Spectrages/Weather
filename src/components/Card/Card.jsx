import React from 'react';
import './Card.css';

class Card extends React.Component {

  render() {
  const ms = this.props.day.dt * 1000;
  const weekDayName = new Date(ms).toLocaleString('ru',  {weekDay: 'long'});
  const imgURL = "owf owf-"+ this.props.day.weather[0].id +" owf-5x icon-style"

  return (
    <div className="col-auto">
      <div className="background-light">
        <h3 className="cardTitle">{weekDayName}</h3>
        <i className={imgURL}></i>
        <h2>{Math.round(this.props.day.main.temp)} °C</h2>
        <div className="cardBody">
            <button className="btn btn-dark btn-outline-light">{this.props.day.weather[0].description}</button>
          </div>
      </div>
    </div>

  )
}}

export default Card

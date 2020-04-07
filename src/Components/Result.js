import React, { Component } from 'react';
import './Result.css';

const Result = props => {
  const {
    date,
    city,
    sunrise,
    sunset,
    temp,
    wind,
    pressure,
    err,
  } = props.weather;
  let content = null;

  if (!err && city) {
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
    content = (
      <>
        <h3>
          Wyszukiwanie dla miasta: <em>{city}</em>
        </h3>
        <h4>Dane dla dnia i godziny: {date}</h4>
        <h4>Aktualna temperatura: {temp} &#176;C</h4>
        <h4>Wschód słońca dzisiaj o: {sunriseTime}</h4>
        <h4>Zachód słońca dzisiaj o: {sunsetTime}</h4>
        <h4>Aktualna siła wiatru: {wind} m/s</h4>
        <h4>Aktualne ciśnienie: {pressure} hPa</h4>
      </>
    );
  }
  return (
    <>
      <div className='result'>{err ? `Nie ma w bazie ${city}` : content}</div>
    </>
  );
};

export default Result;

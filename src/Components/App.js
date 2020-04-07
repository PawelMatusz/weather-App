import React, { Component } from 'react';
import './App.css';
import Form from './Form.js';
import Result from './Result';
const APIKey = 'e6d93006992b0648ca0f2393351b36e7';
class App extends Component {
  state = {
    value: '',
    date: '',
    city: '',
    sunrise: '',
    sunset: '',
    temp: '',
    wind: '',
    pressure: '',
    err: false,
  };

  handleInputChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  // handleCitySubmit = e => {
  //   e.preventDefault();
  //   const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKey}&units=metric
  //   `;
  //   fetch(API)
  //     .then(response => {
  //       if (response.ok) {
  //         return response;
  //       }
  //       throw Error('Nie udało się!');
  //     })
  //     .then(response => response.json())
  //     .then(data => {
  //       const time = new Date().toLocaleString();
  //       this.setState(prevState => ({
  //         err: false,
  //         date: time,
  //         sunrise: data.sys.sunrise,
  //         sunset: data.sys.sunset,
  //         temp: data.main.temp,
  //         pressure: data.main.pressure,
  //         wind: data.wind.speed,
  //         city: prevState.value,
  //       }));
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       this.setState(prevState => ({
  //         err: true,
  //         city: prevState.value,
  //       }));
  //     });
  // };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.value.length === 0) return;
    if (prevState.value !== this.state.value) {
      const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKey}&units=metric
   `;
      fetch(API)
        .then(response => {
          if (response.ok) {
            return response;
          }
          throw Error('Nie udało się!');
        })
        .then(response => response.json())
        .then(data => {
          const time = new Date().toLocaleString();
          this.setState(prevState => ({
            err: false,
            date: time,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            temp: data.main.temp,
            pressure: data.main.pressure,
            wind: data.wind.speed,
            city: prevState.value,
          }));
        })
        .catch(err => {
          console.log(err);
          this.setState(prevState => ({
            err: true,
            city: prevState.value,
          }));
        });
    }
  }

  render() {
    return (
      <div className='app'>
        <Form value={this.state.value} change={this.handleInputChange} />
        <Result weather={this.state} />
      </div>
    );
  }
}

export default App;
